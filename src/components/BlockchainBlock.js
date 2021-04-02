import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import { mineBlock } from '../blockchain/block';
import { DIFICULTY } from '../blockchain/util/constants';
import { hashBlock } from '../blockchain/util/hash';

function BlockchainBlock({
  blockNumber,
  nonce,
  data,
  previousHash,
  hash,
  updateChainValue,
}) {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const hashedData = hashBlock({ blockNumber, nonce, data });
    const checkIsValid =
      hashedData.substring(0, DIFICULTY) === '0'.repeat(DIFICULTY);
    setIsValid(checkIsValid);
    updateChainValue(blockNumber, 'hash', hashedData);
  }, [blockNumber, nonce, data]);
  function handleMine() {
    const { hashedData, nonce } = mineBlock({ blockNumber, data });
    updateChainValue(blockNumber, 'nonce', nonce);
    updateChainValue(blockNumber, 'hash', hashedData);
  }
  return (
    <Container maxW='80%' mt='6' minW='500'>
      <Box bg={isValid ? 'green.100' : 'red.100'} padding='6' borderRadius='md'>
        <Text>Block Number:</Text>
        <Input bg='white' mb='6' value={blockNumber} />
        <Text>nonce:</Text>
        <Input
          bg='white'
          mb='6'
          value={nonce}
          onChange={(e) => {
            updateChainValue(blockNumber, 'nonce', e.target.value);
          }}
        />
        <Text>Data:</Text>
        <Textarea
          bg='white'
          mb='2'
          onChange={(e) => {
            updateChainValue(blockNumber, 'data', e.target.value);
          }}
        />
        <Text>Previous hash:</Text>
        <Input
          bg='white'
          mb='6'
          value={previousHash}
          onChange={(e) => {
            updateChainValue(blockNumber, 'previousHash', e.target.value);
          }}
        />
        <Text>Hash:</Text>
        <Input bg='white' mb='6' value={hash} />
        <Button colorScheme='blue' onClick={handleMine}>
          Mine
        </Button>
      </Box>
    </Container>
  );
}

export default BlockchainBlock;
