import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { mineBlock } from '../../blockchain/block';
import { DIFICULTY } from '../../blockchain/util/constants';
import { hashBlock } from '../../blockchain/util/hash';
import { verifyTransaction } from '../../blockchain/util/wallet';
import TransactionsList from './TransactionsList';

function TransactionsBlock({
  blockNumber,
  nonce,
  data,
  previousHash,
  hash,
  updateChainValue,
  node,
  updateTransactionValue,
}) {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const result = data.find((transaction) => {
      const tempTransaction = { ...transaction };
      delete tempTransaction.signed;
      return !verifyTransaction({
        publicKey: transaction.from,
        data: tempTransaction,
        signature: transaction.signed,
      });
    });
    if (result) {
      setIsValid(false);
    }
    const hashedData = hashBlock({ blockNumber, nonce, data, previousHash });
    const checkIsValid =
      hashedData.substring(0, DIFICULTY) === '0'.repeat(DIFICULTY);
    setIsValid(checkIsValid);
    updateChainValue(blockNumber, 'hash', hashedData, node);
  }, [blockNumber, nonce, data, previousHash]);
  function handleMine() {
    const { hashedData, nonce } = mineBlock({
      blockNumber,
      data,
      previousHash,
    });
    updateChainValue(blockNumber, 'nonce', nonce, node);
    updateChainValue(blockNumber, 'hash', hashedData, node);
  }
  return (
    <Container maxW='80%' my='6' minW='500'>
      <Box bg={isValid ? 'green.100' : 'red.100'} padding='6' borderRadius='md'>
        <Text>Block Number #:</Text>
        <Input bg='white' mb='6' value={blockNumber} />
        <Text>nonce:</Text>
        <Input
          bg='white'
          mb='6'
          value={nonce}
          onChange={(e) => {
            updateChainValue(blockNumber, 'nonce', e.target.value, node);
          }}
        />
        <Text>Transactions:</Text>
        <TransactionsList
          transactions={data}
          blockNumber={blockNumber}
          updateTransactionValue={updateTransactionValue}
        />
        {/* <Textarea
          bg='white'
          mb='2'
          onChange={(e) => {
            updateChainValue(blockNumber, 'data', e.target.value, node);
          }}
          value={data}
        /> */}
        <Text>Previous hash:</Text>
        <Input
          bg='white'
          mb='6'
          value={previousHash}
          onChange={(e) => {
            updateChainValue(blockNumber, 'previousHash', e.target.value, node);
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

export default TransactionsBlock;
