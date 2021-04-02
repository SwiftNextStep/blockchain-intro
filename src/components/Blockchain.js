import { Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import BlockchainBlock from './BlockchainBlock';

function Blockchain() {
  const [chain, setChain] = useImmer([
    {
      blockNumber: 0,
      nonce: 2,
      data: { test: 'my test data' },
      previousHash: '111',
      hash: '000',
    },
    {
      blockNumber: 1,
      nonce: 2,
      data: {},
      previousHash: '123',
      hash: '123',
    },
  ]);

  function updateChainValue(blockNumber, fieldName, fieldValue) {
    setChain((draft) => {
      draft[blockNumber][fieldName] = fieldValue;
    });
  }

  function getBlockchainBlocks() {
    return chain.map((block) => (
      <BlockchainBlock {...block} updateChainValue={updateChainValue} />
    ));
  }
  return (
    <>
      <Heading mb='10' mt='10'>
        Blockchain
      </Heading>

      <Grid maxW='100%' overflowX='scroll' templateColumns='repeat(5, 1fr)'>
        {getBlockchainBlocks()}
      </Grid>
    </>
  );
}

export default Blockchain;
