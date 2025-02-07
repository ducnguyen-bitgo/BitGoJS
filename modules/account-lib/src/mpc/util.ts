export function bigIntFromBufferLE(buf: Buffer): bigint {
  return BigInt('0x' + Buffer.from(buf).reverse().toString('hex'));
}

export function bigIntToBufferLE(n: bigint, bytes?: number): Buffer {
  let v = n.toString(16);
  v = '0'.slice(0, v.length % 2) + v;
  const buf = Buffer.from(v, 'hex').reverse();
  if (bytes && buf.length < bytes) {
    return Buffer.concat([buf, Buffer.alloc(bytes - buf.length)]);
  }
  return buf;
}

export function bigIntFromBufferBE(buf: Buffer): bigint {
  return BigInt('0x' + buf.toString('hex'));
}

export function bigIntToBufferBE(n: bigint, bytes?: number): Buffer {
  let v = n.toString(16);
  v = '0'.slice(0, v.length % 2) + v;
  const buf = Buffer.from(v, 'hex');
  if (bytes && buf.length < bytes) {
    return Buffer.concat([Buffer.alloc(bytes - buf.length), buf]);
  }
  return buf;
}

export function clamp(u: bigint): bigint {
  u &= BigInt('0x7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8');
  u |= BigInt('0x4000000000000000000000000000000000000000000000000000000000000000');
  return u;
}
