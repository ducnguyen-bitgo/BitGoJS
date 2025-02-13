/**
 * @prettier
 */
import * as should from 'should';
import * as bs58 from 'bs58';
import { randomBytes } from 'crypto';
import * as sol from '@solana/web3.js';

import { Dot, Sol } from '../../../src';

import Eddsa from '../../../src/mpc/tss';
import { Ed25519BIP32 } from '../../../src/mpc/hdTree';

import { bigIntFromBufferLE, bigIntToBufferLE, bigIntFromBufferBE, bigIntToBufferBE } from '../../../src/mpc/util';

describe('TSS EDDSA key generation and signing', function () {
  before('initialize modules', async function () {
    await Eddsa.initialize();
    await Ed25519BIP32.initialize();
  });

  it('should generate keys and sign message', function () {
    const MPC = new Eddsa();
    const A = MPC.keyShare(1, 2, 3);
    const B = MPC.keyShare(2, 2, 3);
    const C = MPC.keyShare(3, 2, 3);

    const A_combine = MPC.keyCombine(A.uShare, [B.yShares[1], C.yShares[1]]);
    const B_combine = MPC.keyCombine(B.uShare, [A.yShares[2], C.yShares[2]]);
    const C_combine = MPC.keyCombine(C.uShare, [A.yShares[3], B.yShares[3]]);

    const message = 'MPC on a Friday night';
    const message_buffer = Buffer.from(message);

    // signing with 3-3 signatures
    let A_sign_share = MPC.signShare(message_buffer, A_combine.pShare, [A_combine.jShares[2], A_combine.jShares[3]]);
    let B_sign_share = MPC.signShare(message_buffer, B_combine.pShare, [B_combine.jShares[1], B_combine.jShares[3]]);
    let C_sign_share = MPC.signShare(message_buffer, C_combine.pShare, [C_combine.jShares[1], C_combine.jShares[2]]);
    let A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [B_sign_share.rShares[1], C_sign_share.rShares[1]]);
    let B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [A_sign_share.rShares[2], C_sign_share.rShares[2]]);
    let C_sign = MPC.sign(message_buffer, C_sign_share.xShare, [A_sign_share.rShares[3], B_sign_share.rShares[3]]);
    let signature = MPC.signCombine([A_sign, B_sign, C_sign]);
    let result = MPC.verify(message_buffer, signature).toString();
    result.should.equal(message);

    // signing with A and B
    A_sign_share = MPC.signShare(message_buffer, A_combine.pShare, [A_combine.jShares[2]]);
    B_sign_share = MPC.signShare(message_buffer, B_combine.pShare, [B_combine.jShares[1]]);
    A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [B_sign_share.rShares[1]], [C.yShares[1]]);
    B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [A_sign_share.rShares[2]], [C.yShares[2]]);
    signature = MPC.signCombine([A_sign, B_sign]);
    result = MPC.verify(message_buffer, signature).toString();
    result.should.equal(message);

    // signing with A and C
    A_sign_share = MPC.signShare(message_buffer, A_combine.pShare, [A_combine.jShares[3]]);
    C_sign_share = MPC.signShare(message_buffer, C_combine.pShare, [C_combine.jShares[1]]);
    A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [C_sign_share.rShares[1]], [B.yShares[1]]);
    C_sign = MPC.sign(message_buffer, C_sign_share.xShare, [A_sign_share.rShares[3]], [B.yShares[3]]);
    signature = MPC.signCombine([A_sign, C_sign]);
    result = MPC.verify(message_buffer, signature).toString();
    result.should.equal(message);

    // signing with B and C
    B_sign_share = MPC.signShare(message_buffer, B_combine.pShare, [B_combine.jShares[3]]);
    C_sign_share = MPC.signShare(message_buffer, C_combine.pShare, [C_combine.jShares[2]]);
    B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [C_sign_share.rShares[2]], [A.yShares[2]]);
    C_sign = MPC.sign(message_buffer, C_sign_share.xShare, [B_sign_share.rShares[3]], [A.yShares[3]]);
    signature = MPC.signCombine([B_sign, C_sign]);
    result = MPC.verify(message_buffer, signature).toString();
    result.should.equal(message);
  });

  it('should verify BIP32 subkey signature', function () {
    const path = 'm/0/1/2';
    const hdTree = new Ed25519BIP32();
    const MPC = new Eddsa(hdTree);
    const A = MPC.keyShare(1, 2, 3);
    const B = MPC.keyShare(2, 2, 3);
    const C = MPC.keyShare(3, 2, 3);

    // Combine shares to common base address.
    const A_combine = MPC.keyCombine(A.uShare, [B.yShares[1], C.yShares[1]]);
    const B_combine = MPC.keyCombine(B.uShare, [A.yShares[2], C.yShares[2]]);

    // Party A derives subkey P share and new Y shares.
    const A_subkey = MPC.keyDerive(A.uShare, [B.yShares[1], C.yShares[1]], path);

    // Party B calculates new P share using party A's subkey Y shares.
    const B_subkey = MPC.keyCombine(B.uShare, [A_subkey.yShares[2], C.yShares[2]]);

    // Derive the public subkeychain separately using the common keychain.
    const subkey = hdTree.publicDerive(
      {
        pk: bigIntFromBufferLE(Buffer.from(A_combine.pShare.y, 'hex')),
        chaincode: bigIntFromBufferBE(Buffer.from(A_combine.pShare.chaincode, 'hex')),
      },
      path,
    );
    const y = bigIntToBufferLE(subkey.pk, 32).toString('hex');
    const chaincode = bigIntToBufferBE(subkey.chaincode, 32).toString('hex');

    // Verify the keychain in the subkey P shares equals the separately derived public subkeychain.
    A_subkey.pShare.y.should.equal(y);
    A_subkey.pShare.chaincode.should.equal(chaincode);
    B_subkey.pShare.y.should.equal(y);
    B_subkey.pShare.chaincode.should.equal(chaincode);

    const message = 'MPC on a Friday night';
    const message_buffer = Buffer.from(message);

    // Signing with A and B using subkey P shares.
    const A_sign_share = MPC.signShare(message_buffer, A_subkey.pShare, [A_combine.jShares[2]]);
    const B_sign_share = MPC.signShare(message_buffer, B_subkey.pShare, [B_combine.jShares[1]]);
    const A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [B_sign_share.rShares[1]], [C.yShares[1]]);
    const B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [A_sign_share.rShares[2]], [C.yShares[2]]);
    const signature = MPC.signCombine([A_sign, B_sign]);
    const result = MPC.verify(message_buffer, signature).toString();
    result.should.equal(message);

    // Verify the public key in the signature equals the separately derived public subkey.
    signature.y.should.equal(y);
  });

  it('should derive unhardened child keys', function () {
    const hdTree = new Ed25519BIP32();
    const MPC = new Eddsa(hdTree);

    const A = MPC.keyShare(1, 2, 3);
    const B = MPC.keyShare(2, 2, 3);
    const C = MPC.keyShare(3, 2, 3);

    const A_combine = MPC.keyCombine(A.uShare, [B.yShares[1], C.yShares[1]]);

    const commonKeychain = A_combine.pShare.y + A_combine.pShare.chaincode;

    for (let index = 0; index < 10; index++) {
      const path = `m/0/0/${index}`;
      const derive1 = MPC.deriveUnhardened(commonKeychain, path);
      const subkey = MPC.keyDerive(A.uShare, [B.yShares[1], C.yShares[1]], path);
      const derive2 = MPC.deriveUnhardened(commonKeychain, path);

      subkey.pShare.y.should.equal(derive1);
      derive1.should.equal(derive2, 'derivation should be deterministic');

      const solAddress = bs58.encode(Buffer.from(derive1, 'hex'));
      Sol.Utils.isValidPublicKey(solAddress).should.be.true();

      const solPk = new sol.PublicKey(bs58.encode(Buffer.from(derive1, 'hex')));
      solPk.toBuffer().toString('hex').should.equal(derive1);
    }

    const rootPath = 'm/0';
    const rootPublicKey = MPC.deriveUnhardened(commonKeychain, rootPath);
    const solPk = new sol.PublicKey(bs58.encode(Buffer.from(rootPublicKey, 'hex')));
    solPk.toBuffer().toString('hex').should.equal(rootPublicKey);
  });

  it('should derive unhardened valid dot child keys', function () {
    const hdTree = new Ed25519BIP32();
    const MPC = new Eddsa(hdTree);

    const A = MPC.keyShare(1, 2, 3);
    const B = MPC.keyShare(2, 2, 3);
    const C = MPC.keyShare(3, 2, 3);

    const A_combine = MPC.keyCombine(A.uShare, [B.yShares[1], C.yShares[1]]);

    const commonKeychain = A_combine.pShare.y + A_combine.pShare.chaincode;

    for (let index = 0; index < 10; index++) {
      const path = `m/0/0/${index}`;
      const derive1 = MPC.deriveUnhardened(commonKeychain, path);
      const derive2 = MPC.deriveUnhardened(commonKeychain, path);

      derive1.should.equal(derive2, 'derivation should be deterministic');

      const pubKeyPair = new Dot.KeyPair({ pub: derive1 });
      pubKeyPair.getKeys().pub.should.equal(derive1);
    }

    const rootPath = 'm/';
    const rootPublicKey = MPC.deriveUnhardened(commonKeychain, rootPath);
    const pubKeyPair = new Dot.KeyPair({ pub: rootPublicKey });
    pubKeyPair.getKeys().pub.should.equal(rootPublicKey);
  });

  it('should fail signing without meeting threshold', function () {
    const MPC = new Eddsa();
    const A = MPC.keyShare(1, 2, 3);
    const B = MPC.keyShare(2, 2, 3);
    const C = MPC.keyShare(3, 2, 3);

    const A_combine = MPC.keyCombine(A.uShare, [B.yShares[1], C.yShares[1]]);
    const B_combine = MPC.keyCombine(B.uShare, [A.yShares[2], C.yShares[2]]);

    const message = 'MPC on a Friday night';
    const message_buffer = Buffer.from(message, 'utf-8');
    const A_sign_share = MPC.signShare(message_buffer, A_combine.pShare, [A_combine.jShares[2]]);
    const B_sign_share = MPC.signShare(message_buffer, B_combine.pShare, [B_combine.jShares[1]]);

    const A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [B_sign_share.rShares[1]]);
    const signature = MPC.signCombine([A_sign]);
    MPC.verify.bind(MPC, message_buffer, signature).should.throw();
  });

  describe('with specific seed', function () {
    it('should generate keys and sign message', function () {
      const seed = randomBytes(64);

      const MPC = new Eddsa();
      const A = MPC.keyShare(1, 2, 3, seed);
      const B = MPC.keyShare(2, 2, 3, seed);
      const C = MPC.keyShare(3, 2, 3, seed);

      // Keys should be deterministic when using seed
      MPC.keyShare(1, 2, 3, seed).should.deepEqual(A);
      MPC.keyShare(2, 2, 3, seed).should.deepEqual(B);
      MPC.keyShare(3, 2, 3, seed).should.deepEqual(C);

      const A_combine = MPC.keyCombine(A.uShare, [B.yShares[1], C.yShares[1]]);
      const B_combine = MPC.keyCombine(B.uShare, [A.yShares[2], C.yShares[2]]);
      const C_combine = MPC.keyCombine(C.uShare, [A.yShares[3], B.yShares[3]]);

      const message = 'MPC on a Friday night';
      const message_buffer = Buffer.from(message);

      // signing with 3-3 signatures
      let A_sign_share = MPC.signShare(message_buffer, A_combine.pShare, [A_combine.jShares[2], A_combine.jShares[3]]);
      let B_sign_share = MPC.signShare(message_buffer, B_combine.pShare, [B_combine.jShares[1], B_combine.jShares[3]]);
      let C_sign_share = MPC.signShare(message_buffer, C_combine.pShare, [C_combine.jShares[1], C_combine.jShares[2]]);
      let A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [B_sign_share.rShares[1], C_sign_share.rShares[1]]);
      let B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [A_sign_share.rShares[2], C_sign_share.rShares[2]]);
      let C_sign = MPC.sign(message_buffer, C_sign_share.xShare, [A_sign_share.rShares[3], B_sign_share.rShares[3]]);
      let signature = MPC.signCombine([A_sign, B_sign, C_sign]);
      let result = MPC.verify(message_buffer, signature).toString();
      result.should.equal(message);

      // signing with A and B
      A_sign_share = MPC.signShare(message_buffer, A_combine.pShare, [A_combine.jShares[2]]);
      B_sign_share = MPC.signShare(message_buffer, B_combine.pShare, [B_combine.jShares[1]]);
      A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [B_sign_share.rShares[1]], [C.yShares[1]]);
      B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [A_sign_share.rShares[2]], [C.yShares[2]]);
      signature = MPC.signCombine([A_sign, B_sign]);
      result = MPC.verify(message_buffer, signature).toString();
      result.should.equal(message);

      // signing with A and C
      A_sign_share = MPC.signShare(message_buffer, A_combine.pShare, [A_combine.jShares[3]]);
      C_sign_share = MPC.signShare(message_buffer, C_combine.pShare, [C_combine.jShares[1]]);
      A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [C_sign_share.rShares[1]], [B.yShares[1]]);
      C_sign = MPC.sign(message_buffer, C_sign_share.xShare, [A_sign_share.rShares[3]], [B.yShares[3]]);
      signature = MPC.signCombine([A_sign, C_sign]);
      result = MPC.verify(message_buffer, signature).toString();
      result.should.equal(message);

      // signing with B and C
      B_sign_share = MPC.signShare(message_buffer, B_combine.pShare, [B_combine.jShares[3]]);
      C_sign_share = MPC.signShare(message_buffer, C_combine.pShare, [C_combine.jShares[2]]);
      B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [C_sign_share.rShares[2]], [A.yShares[2]]);
      C_sign = MPC.sign(message_buffer, C_sign_share.xShare, [B_sign_share.rShares[3]], [A.yShares[3]]);
      signature = MPC.signCombine([B_sign, C_sign]);
      result = MPC.verify(message_buffer, signature).toString();
      result.should.equal(message);
    });

    it('should verify BIP32 subkey signature', function () {
      const seed = randomBytes(64);
      const path = 'm/0/1/2';
      const hdTree = new Ed25519BIP32();
      const MPC = new Eddsa(hdTree);
      const A = MPC.keyShare(1, 2, 3, seed);
      const B = MPC.keyShare(2, 2, 3, seed);
      const C = MPC.keyShare(3, 2, 3, seed);

      // Keys should be deterministic when using seed
      MPC.keyShare(1, 2, 3, seed).should.deepEqual(A);
      MPC.keyShare(2, 2, 3, seed).should.deepEqual(B);
      MPC.keyShare(3, 2, 3, seed).should.deepEqual(C);

      // Combine shares to common base address.
      const A_combine = MPC.keyCombine(A.uShare, [B.yShares[1], C.yShares[1]]);
      const B_combine = MPC.keyCombine(B.uShare, [A.yShares[2], C.yShares[2]]);

      // Party A derives subkey P share and new Y shares.
      const A_subkey = MPC.keyDerive(A.uShare, [B.yShares[1], C.yShares[1]], path);

      // Party B calculates new P share using party A's subkey Y shares.
      const B_subkey = MPC.keyCombine(B.uShare, [A_subkey.yShares[2], C.yShares[2]]);

      // Derive the public subkeychain separately using the common keychain.
      const subkey = hdTree.publicDerive(
        {
          pk: bigIntFromBufferLE(Buffer.from(A_combine.pShare.y, 'hex')),
          chaincode: bigIntFromBufferBE(Buffer.from(A_combine.pShare.chaincode, 'hex')),
        },
        path,
      );
      const y = bigIntToBufferLE(subkey.pk, 32).toString('hex');
      const chaincode = bigIntToBufferBE(subkey.chaincode, 32).toString('hex');

      // Verify the keychain in the subkey P shares equals the separately derived public subkeychain.
      A_subkey.pShare.y.should.equal(y);
      A_subkey.pShare.chaincode.should.equal(chaincode);
      B_subkey.pShare.y.should.equal(y);
      B_subkey.pShare.chaincode.should.equal(chaincode);

      const message = 'MPC on a Friday night';
      const message_buffer = Buffer.from(message);

      // Signing with A and B using subkey P shares.
      const A_sign_share = MPC.signShare(message_buffer, A_subkey.pShare, [A_combine.jShares[2]]);
      const B_sign_share = MPC.signShare(message_buffer, B_subkey.pShare, [B_combine.jShares[1]]);
      const A_sign = MPC.sign(message_buffer, A_sign_share.xShare, [B_sign_share.rShares[1]], [C.yShares[1]]);
      const B_sign = MPC.sign(message_buffer, B_sign_share.xShare, [A_sign_share.rShares[2]], [C.yShares[2]]);
      const signature = MPC.signCombine([A_sign, B_sign]);
      const result = MPC.verify(message_buffer, signature).toString();
      result.should.equal(message);

      // Verify the public key in the signature equals the separately derived public subkey.
      signature.y.should.equal(y);
    });

    it('should fail if seed is not length 64', function () {
      const MPC = new Eddsa();

      should.throws(() => MPC.keyShare(1, 2, 3, randomBytes(33)), 'Seed must have length 64');
      should.throws(() => MPC.keyShare(1, 2, 3, randomBytes(66)), 'Seed must have length 64');
    });
  });
});
