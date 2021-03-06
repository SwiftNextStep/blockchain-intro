import { DIFICULTY } from './util/constants';
import { hashBlock } from './util/hash';

export function mineBlock({ blockNumber, data, previousHash }) {
  let nonce = 0;
  let hashedData;
  do {
    nonce++;
    hashedData = hashBlock({ blockNumber, nonce, data, previousHash });
  } while (hashedData.substring(0, DIFICULTY) !== '0'.repeat(DIFICULTY));
  return { hashedData, nonce };
}
