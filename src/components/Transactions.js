import { Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import TransactionsBlock from './TransactionsBlock';

function Transactions() {
  const [chain, setChain] = useImmer([
    {
      blockNumber: 0,
      nonce: 19204,
      data: [
        {
          id: 0,
          amount: 10,
          from: 'me',
          to: 'you',
        },
        {
          id: 1,
          amount: 5,
          from: 'you',
          to: 'me',
        },
        {
          id: 2,
          amount: 1,
          from: 'me',
          to: 'you',
        },
      ],
      previousHash: '0'.repeat(64),
      hash: '000032ac7852203819adbcafd1ae54ee51968ffafa6c5468d2e6655c4c777e1d',
    },
    {
      blockNumber: 1,
      nonce: 34402,
      data: [
        {
          id: 0,
          amount: 9,
          from: 'Icaro',
          to: 'Nicolas',
        },
        {
          id: 1,
          amount: 1,
          from: 'Nicolas',
          to: 'Icaro',
        },
        {
          id: 2,
          amount: 12,
          from: 'me',
          to: 'you',
        },
      ],
      previousHash: '',
      hash: '0000b069cf12069fc3c27e4d2d0d7a178eb3a75df45c0e99a7a9234c77d4acce',
    },
    {
      blockNumber: 2,
      nonce: 25790,
      data: [
        {
          id: 0,
          amount: 7,
          from: 'Rafaela',
          to: 'Nicolas',
        },
        {
          id: 1,
          amount: 6,
          from: 'Rafaela',
          to: 'Icaro',
        },
        {
          id: 2,
          amount: 13,
          from: 'me',
          to: 'you',
        },
      ],
      previousHash: '',
      hash: '0000c729ba6c40884f17e4307f808515efc18c15716f445a26780242c93665ae',
    },
  ]);

  function updateChainValue(blockNumber, fieldName, fieldValue) {
    setChain((draft) => {
      draft[blockNumber][fieldName] = fieldValue;
    });
  }

  function getBlockchainBlocks() {
    return chain.map((block) => {
      console.log(block);
      if (block.blockNumber === 0) {
        return (
          <TransactionsBlock {...block} updateChainValue={updateChainValue} />
        );
      }
      const previousHashValue = chain[block.blockNumber - 1].hash;
      return (
        <TransactionsBlock
          {...block}
          previousHash={previousHashValue}
          updateChainValue={updateChainValue}
        />
      );
    });
  }
  return (
    <>
      <Heading mb='10' mt='10'>
        Transactions
      </Heading>

      <Grid maxW='100%' overflowX='scroll' templateColumns='repeat(5, 1fr)'>
        {getBlockchainBlocks()}
      </Grid>
    </>
  );
}

export default Transactions;
