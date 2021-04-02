import crypto from 'crypto';

export function sha256Hash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}
