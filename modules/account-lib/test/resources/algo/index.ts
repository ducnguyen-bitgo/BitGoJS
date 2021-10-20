/*
 * secret/public keys are from RFC 8032
 *
 */

export const accounts = {
  account1: {
    secretKey: Buffer.from('9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60', 'hex'),
    pubKey: Buffer.from('d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a', 'hex'),
    prvKey: 'TVQ3DHPP7VNGBOUEJL2JF3BMYRCETRLJPMZGSGLQHOWAGHFOP5QEYTZH2Q',
    address: '25NJQAMCWEFLPVKL73J4SZAHHIHOC4XT3KTCGJNPAINGR5YHKENMEF5QTE',
    voteKey: 'O0lMKXAaqN4h7jVJr8LHY0hvEbK62OJLJkN1soxp9Bg=',
    selectionKey: 'wXjfzAoZhls/zrhgAn8zas/WTktvRuxeps6fkv2au+c=',
  },
  account2: {
    secretKey: Buffer.from('4ccd089b28ff96da9db6c346ec114e0f5b8a319f35aba624da8cf6ed4fb8a6fb', 'hex'),
    pubKey: Buffer.from('3d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660c', 'hex'),
    address: 'HVABPQ7IIOEVVEVXBKTU2G36XSOJQLGPF3CJNDGAZVK7CKXUMYGA6EOE6Y',
  },
  account3: {
    secretKey: Buffer.from('c5aa8df43f9f837bedb7442f31dcb7b166d38535076f094b85ce3a2e0b4458f7', 'hex'),
    pubKey: Buffer.from('fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025', 'hex'),
    prvKey: 'YWVI35B7T6BXX3NXIQXTDXFXWFTNHBJVA5XQSS4FZY5C4C2ELD3YWYSZLU',
    address: '7RI43DTCDCQ2HDNEP3IAEMHQLAEBN3ITXIZQHLC55OIRKSEQQAS52OYKJE',
  },
  account4: {
    secretKey: Buffer.from('9a78040f4889eac1878793757c54b85705638fad51996dd9135652ff8902d924', 'hex'),
    pubKey: Buffer.from('e8248c0ce9cf48ef41b5648220ac84caf7ef49988503b2ef036fa16ecae7fe1c', 'hex'),
    prvKey: 'TJ4AID2IRHVMDB4HSN2XYVFYK4CWHD5NKGMW3WITKZJP7CIC3ESKBVGXNA',
    address: '5ASIYDHJZ5EO6QNVMSBCBLEEZL366SMYQUB3F3YDN6QW5SXH7YOLUE3ZIY',
  },
  default: {
    secretKey: Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex'),
    pubKey: Buffer.from('3b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29', 'hex'),
    address: 'HNVCPPGOW2SC2YVDVDICU3YNONSTEFLXDXREHJR2YBEKDC2Z3IUZSC6YGI',
  },
} as const;
export const rawTx = {
  transfer: {
    unsigned:
      '8ba3616d74cd2710a5636c6f7365c420fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025a3666565cd55f0a2667601a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c7664a46e6f7465c4046e6f7465a3726376c4203d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660ca3736e64c420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa474797065a3706179',
    signed:
      '82a3736967c44070146fd2a30ef31153e200c4b9df29e046035fe5ad89341770074dd532068d03236c907f1a03cdbb834cca3e517d87f14551f48c2569592e8a7a339b5d33fd0ea374786e8ba3616d74cd2710a5636c6f7365c420fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025a3666565cd55f0a2667601a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c7664a46e6f7465c4046e6f7465a3726376c4203d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660ca3736e64c420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa474797065a3706179',
    // signed with account1 only
    halfSigned:
      '82a46d73696783a67375627369679282a2706bc420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa173c440bf584b2a9ec266c7809aaa0f848687c78d0145dc5a8967e14456d11697c72e8b9ad6b8eecbe8aea41fcf384d05a6af54e9d0928fba7d29edbdf27d9ef3c9a50081a2706bc420fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025a374687202a17601a374786e89a3616d74cd2710a3666565cd55f0a2667601a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c7664a3726376c4203d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660ca3736e64c4205a874762a5e8f55e0a19995ae37d60a6355a26b830386eca3639ec3928660c2ca474797065a3706179',
    // signed with account1 and account 3
    multisig:
      '82a46d73696783a67375627369679282a2706bc420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa173c440bf584b2a9ec266c7809aaa0f848687c78d0145dc5a8967e14456d11697c72e8b9ad6b8eecbe8aea41fcf384d05a6af54e9d0928fba7d29edbdf27d9ef3c9a50082a2706bc420fc51cd8e6218a1a38da47ed00230f0580816ed13ba3303ac5deb911548908025a173c440de5c22666410410b77a34b2a917fc1099610a2771818d51e6446f15bd03b2f19fbc63d7557d6ff4f51e61933bdc833064f6c9996d62e61b8ea5ac616a7b7260aa374687202a17601a374786e89a3616d74cd2710a3666565cd55f0a2667601a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c7664a3726376c4203d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660ca3736e64c4205a874762a5e8f55e0a19995ae37d60a6355a26b830386eca3639ec3928660c2ca474797065a3706179',
  },
  keyReg: {
    unsigned:
      '8ca3666565ce0004a380a2667601a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c7664a673656c6b6579c420c178dfcc0a19865b3fceb860027f336acfd64e4b6f46ec5ea6ce9f92fd9abbe7a3736e64c420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa474797065a66b6579726567a7766f746566737401a6766f74656b6409a7766f74656b6579c4203b494c29701aa8de21ee3549afc2c763486f11b2bad8e24b264375b28c69f418a7766f74656c737464',
    signed:
      '82a3736967c44083e0e70bae726d735a2fe32062378c50a5b56f125445d9850666c5a04c679af33add29d66b301e293c9d5334046bc02c04a209eed50db049f1518a8a59176e03a374786e8ca3666565ce0004a380a2667601a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c7664a673656c6b6579c420c178dfcc0a19865b3fceb860027f336acfd64e4b6f46ec5ea6ce9f92fd9abbe7a3736e64c420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa474797065a66b6579726567a7766f746566737401a6766f74656b6409a7766f74656b6579c4203b494c29701aa8de21ee3549afc2c763486f11b2bad8e24b264375b28c69f418a7766f74656c737464',
    oldSdkUnsigned:
      'i6NmZWXNA+iiZnbOAEP9CaJnaMQgSGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiKibHbOAEQA8aZzZWxrZXnEIKwMIX5TG2N2H6/7nBcr1rqdTjri1ZuJbweQmxIskiJYo3NuZMQgD0uZmC5oerY66ZLGfke1HQhaS9bpxik1JTdbr6YASPikdHlwZaZrZXlyZWendm90ZWZzdM4AQ/0JpnZvdGVrZM0nEKd2b3Rla2V5xCBkMKCW/b56NrcAA6XjLwxaZ9L7qM+G5/c07GxoxipjDad2b3RlbHN0zgCfiok=',
    oldSdkUnsigned2:
      'gaN0eG6Lo2ZlZc0D6KJmdgGiZ2jEIEhjtRiks8hOyBDyLU8QgcsPcfBZp6wg3sYvf3DlCToiomx2zQPppnNlbGtlecQgk0Y6FTk9WlWBa/8a49vPGkjX0LBkmnbE6MeU7ntQRWCjc25kxCCTRjoVOT1aVYFr/xrj288aSNfQsGSadsTox5Tue1BFYKR0eXBlpmtleXJlZ6d2b3RlZnN0AaZ2b3Rla2TNJxCndm90ZWtlecQgk0Y6FTk9WlWBa/8a49vPGkjX0LBkmnbE6MeU7ntQRWCndm90ZWxzdM4AW42B/',
    oldSdkSigned:
      'gqRtc2lng6ZzdWJzaWeTgqJwa8Qg68zb9AxlAB1uil8C8X52UhVTeUVlp3hftY0m5dXmkjOhc8RAhkE2v4zrnUoK0MDMyivfrqbRBaFDkRsDIfzmIIhl1SS6ah3VWBIKINcgqbML9gTrGeiBVc4pUf/PHeB62HApAIGicGvEIAViU+sPB9MZWthG4C9j2qzf/x0tZn0KZGY6wXpwYY0GgaJwa8Qgb+f6oJFlvu52DH7nQbeNMwFGIrBjWhgAyYb9dh8kER2jdGhyAqF2AaN0eG6Io2ZlZc0EGqJmds4AwAJQo2dlbqx0ZXN0bmV0LXYxLjCiZ2jEIEhjtRiks8hOyBDyLU8QgcsPcfBZp6wg3sYvf3DlCToiomx2zgDABjinbm9ucGFydMOjc25kxCAqZ8LF7s/o9GDjL032pGQob1QvMpV1HsjBsLijOl9jVaR0eXBlpmtleXJlZw==',
  },
  assetTransfer: {
    unsigned:
      '8aa461616d74cd03e8a461726376c4203d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660ca3666565cd03e8a2667601a367656ed92c53474f31474b537a7945374945504974547843427977397838466d6e724344657869392f634f554a4f69493da26768c408b5eb2d9deb7ebf5da26c760aa3736e64c420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa474797065a56178666572a47861696401',
    signed:
      '82a3736967c440177b6d7f548c8c579618200fae3f61549cdd3fe0aba5a74cc3dc72112a5fe4aa46b209f63a364a33127886f06ffca45fcbe66cca64c990a6cbf7e8fdbace950ca374786e8aa461616d74cf8ac7230489e80000a461726376c4203d4017c3e843895a92b70aa74d1b7ebc9c982ccf2ec4968cc0cd55f12af4660ca3666565cd03e8a2667601a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c760aa3736e64c420d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511aa474797065a56178666572a47861696401',
  },
} as const;

export const networks = {
  mainnet: {
    genesisID: 'mainnet-v1.0',
    genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
  },
  testnet: {
    genesisID: 'testnet-v1.0',
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
  },
  betanet: {
    genesisID: 'betanet-v1.0',
    genesisHash: 'mFgazF+2uRS1tMiL9dsj01hJGySEmPN28B/TjjvpVW0=',
  },
} as const;

export const transactions = {
  payTxn: {
    from: 'YGNUPHXWPHJPUHP5Y4N5FEKHPRGIGGL7G6DR33BF6GLMMW554D53DEHINI',
    to: 'SP745JJR4KPRQEXJZHVIEN736LYTL2T2DFMG3OIIFJBV66K73PHNMDCZVM',
    amount: 5000,
    firstRound: 167,
    lastRound: 1167,
    genesisID: 'testnet-v1.0',
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
  },
  nonParticipationTxn: {
    type: 'keyreg',
    from: 'R275HNKEXC3AI3CYL2PPOGP2AFA4XCRDO2CCREGCVDX6OJAZ54MBD7VLYA',
    firstRound: 167,
    lastRound: 1167,
    genesisID: 'testnet-v1.0',
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    nonParticipation: true,
  },
  keyregTxn: {
    fee: 1000,
    firstRound: 167,
    genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
    lastRound: 1167,
    selectionKey: 'R275HNKEXC3AI3CYL2PPOGP2AFA4XCRDO2CCREGCVDX6OJAZ54MBD7VLYA',
    from: 'R275HNKEXC3AI3CYL2PPOGP2AFA4XCRDO2CCREGCVDX6OJAZ54MBD7VLYA',
    type: 'keyreg',
    voteFirst: 1,
    voteKeyDilution: 10000,
    voteKey: 'R275HNKEXC3AI3CYL2PPOGP2AFA4XCRDO2CCREGCVDX6OJAZ54MBD7VLYA',
    voteLast: 6000001,
  },
} as const;

export const base64Txn = {
  validTxn: {
    txn: 'gqRtc2lng6ZzdWJzaWeSgqJwa8Qg/FHNjmIYoaONpH7QAjDwWAgW7RO6MwOsXeuRFUiQgCWhc8RAF4xcg7xeKPQUcneXudW6pFuq7VvQrERgl5+WWgkklCAt8IcBNUSIlqivbh+vXeJV8kZYMBkWJtkGNFFK6bTBDYKicGvEIOgkjAzpz0jvQbVkgiCshMr370mYhQOy7wNvoW7K5/4coXPEQF1jmRCXXUrC2Hzv8DguSHcetbMH2p5CgYBqkWcezzVIBqMZagqFBhgC+1QZKu0fZoIzT/xxm+6Cr0xm454MpgmjdGhyAqF2AaN0eG6Jo2FtdM4ATEtAo2ZlZc0D6KJmds4AW42Ao2dlbqx0ZXN0bmV0LXYxLjCiZ2jEIEhjtRiks8hOyBDyLU8QgcsPcfBZp6wg3sYvf3DlCToiomx2zgBbkWijcmN2xCA9QBfD6EOJWpK3CqdNG368nJgszy7ElozAzVXxKvRmDKNzbmTEILoiaUTZ7fxKB4OkKQLOI6BtvKqxDEcPsg8hoMfkXxatpHR5cGWjcGF5',
    txid: 'M3DOUTEZI6I2YMCXGESAIG3V6EWCARCYETDVGTU6I7H5ADRE2CBA',
  },
  invalidTxn: {
    txn: 'gqRtc2lng6ZzdWJzaWeSgqJwa8Qg/FHNjmIYoaONpH7QAjDwWAgW7RO6MwOsXeuRFUiQgCWhc8RAF4xcg7xeKPQUcneXudW6pFuq7VvQrERgl5+WWgkklCAt8IcBNUSIlqivbh+vXeJV8kZYMBkWJtkGNFFK6bTBDYKicGvEIOgkjAzpz0jvQbVkgiCshMr370mYhQOy7wNvoW7K5/4coXPEQF1jmRCXXUrC2Hzv8DguSHcetbMH2p5CgYBqkWcezzVIBqMZagqFBhgC+1QZKu0fZoIzT/xxm+6Cr0xm454MpgmjdGhyAqF2AaN0eG6Jo2FtdM4ATEtAo2ZlZc0D6KJmds4AW42Ao2dlbqx0ZXN0bmV0LXYxLjCiZ2jEIEhjtRiks8hOyBDyLU8QgcsPcfBZp6wg3sYvf3DlCToiomx2zgBbkWijcmN2xCA9QBfD6EOJWpK3CqdNG368nJgszy7ElozAzVXxKvRmDKNzbmTEILoiaUTZ7fxKB4OkKQLOI6BtvKqxDEcPsg8hoMfkXxatpHR5cGWjcGF',
    txid: '',
  },
  invalidTxn2: {
    txn: 'gqNzaWfEQMy4gX8gJhfvxUSy9CHO/6hrTeu8A0RegygRBPRkID/xepm2W1d1zqBIjnlpChY69E94ticSP/0Bk7t9goJHMw+jdHhuiaNhbXTOAExLQKNmZWXNA+iiZnbOAFuNgKNnZW6sdGVzdG5ldC12MS4womdoxCBIY7UYpLPITsgQ8i1PEIHLD3HwWaesIN7GL39w5Qk6IqJsds4AW5Foo3JjdsQgPUAXw+hDiVqStwqnTRt+vJyYLM8uxJaMwM1V8Sr0Zgyjc25kxCDXWpgBgrEKt9VL/tPJZAc6DuFy89qmIyWvAhpo9wdRGqR0eXBlo3BheQ==',
    txid: 'RSWDVNXWLX7UEDVGJR7B7SSCL3Q43UILPYIEX2AMDD72JIFV7TVA',
  },
} as const;
