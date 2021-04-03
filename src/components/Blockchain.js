import { Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import BlockchainBlock from './BlockchainBlock';

function Blockchain() {
  const [chain, setChain] = useImmer([
    {
      blockNumber: 0,
      nonce: 2475,
      data: 'Genesis Block',
      previousHash: '0'.repeat(64),
      hash: '000',
    },
    {
      blockNumber: 1,
      nonce: 137600,
      data: 'Another block',
      previousHash: '',
      hash: '123',
    },
    {
      blockNumber: 2,
      nonce: 137600,
      data: 'Final block',
      previousHash: '',
      hash: '123',
    },
  ]);

  function updateChainValue(blockNumber, fieldName, fieldValue) {
    setChain((draft) => {
      draft[blockNumber][fieldName] = fieldValue;
    });
  }

  function getBlockchainBlocks() {
    return chain.map((block) => {
      if (block.blockNumber === 0) {
        return (
          <BlockchainBlock {...block} updateChainValue={updateChainValue} />
        );
      }
      const previousHashValue = chain[block.blockNumber - 1].hash;
      return (
        <BlockchainBlock
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
        Blockchain
      </Heading>

      <Grid maxW='100%' overflowX='scroll' templateColumns='repeat(5, 1fr)'>
        {getBlockchainBlocks()}
      </Grid>
    </>
  );
}

export default Blockchain;
