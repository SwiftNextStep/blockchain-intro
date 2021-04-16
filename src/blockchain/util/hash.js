import crypto from 'crypto';

export function sha256Hash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}

export function hashBlock({ blockNumber, nonce, data, previousHash }) {
  const blockString = JSON.stringify({
    blockNumber,
    nonce,
    data,
    previousHash,
  });
  const blockHash = sha256Hash(blockString);
  return blockHash;
}

export function hashData(data) {
  const dataString = JSON.stringify(data);
  const dataHash = sha256Hash(dataString);
  return dataHash;
}
