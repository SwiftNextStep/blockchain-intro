import { Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import BlockchainBlock from './BlockchainBlock';

function Distributed() {
  const [chain, setChain] = useImmer([
    [
      {
        blockNumber: 0,
        nonce: 19204,
        data: 'Genesis Block',
        previousHash: '0'.repeat(64),
        hash: '000',
      },
      {
        blockNumber: 1,
        nonce: 34402,
        data: 'Another block',
        previousHash: '',
        hash: '123',
      },
      {
        blockNumber: 2,
        nonce: 25790,
        data: 'Final block',
        previousHash: '',
        hash: '123',
      },
    ],
    [
      {
        blockNumber: 0,
        nonce: 19204,
        data: 'Genesis Block',
        previousHash: '0'.repeat(64),
        hash: '000',
      },
      {
        blockNumber: 1,
        nonce: 34402,
        data: 'Another block',
        previousHash: '',
        hash: '123',
      },
      {
        blockNumber: 2,
        nonce: 25790,
        data: 'Final block',
        previousHash: '',
        hash: '123',
      },
    ],
    [
      {
        blockNumber: 0,
        nonce: 19204,
        data: 'Genesis Block',
        previousHash: '0'.repeat(64),
        hash: '000',
      },
      {
        blockNumber: 1,
        nonce: 34402,
        data: 'Another block',
        previousHash: '',
        hash: '123',
      },
      {
        blockNumber: 2,
        nonce: 25790,
        data: 'Final block',
        previousHash: '',
        hash: '123',
      },
    ],
  ]);

  function updateChainValue(blockNumber, fieldName, fieldValue) {
    // setChain((draft) => {
    //   draft[blockNumber][fieldName] = fieldValue;
    // });
  }

  function getBlockchainBlocks(blockchain, index) {
    return blockchain.map((block) => {
      if (block.blockNumber === 0) {
        return (
          <BlockchainBlock
            {...block}
            updateChainValue={updateChainValue}
            node={index}
          />
        );
      }
      const previousHashValue = chain[block.blockNumber - 1].hash;
      return (
        <BlockchainBlock
          {...block}
          previousHash={previousHashValue}
          updateChainValue={updateChainValue}
          node={index}
        />
      );
    });
  }
  return (
    <>
      {chain.map((blockchain, index) => {
        return (
          <Grid maxW='100%' overflowX='scroll' templateColumns='repeat(5, 1fr)'>
            {getBlockchainBlocks(blockchain, index)}
          </Grid>
        );
      })}
    </>
  );
}

export default Distributed;
