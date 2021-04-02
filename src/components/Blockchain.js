import { Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import BlockchainBlock from './BlockchainBlock';

function Blockchain() {
  const [chain, setChain] = useImmer([
    {
      blockNumber: 0,
      nonce: 0,
      data: {},
      previousHash: '',
      hash: '',
    },
    {
      blockNumber: 0,
      nonce: 0,
      data: {},
      previousHash: '',
      hash: '',
    },
  ]);
  function getBlockchainBlocks() {
    return chain.map((block) => <BlockchainBlock />);
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
