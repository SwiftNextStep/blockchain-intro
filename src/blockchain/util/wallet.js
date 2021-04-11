import elliptic from 'elliptic';

function init() {
  const EC = elliptic.ec;
  const secp256k1 = new EC('secp256k1');
  return secp256k1;
}

export function getSecp256Keys() {
  const secp256k1 = init();
  const keyPair = secp256k1.genKeyPair();
  const publicKey = keyPair.getPublic('hex');
  const privateKey = keyPair.getPrivate('hex');
  return { publicKey, privateKey };
}
