import { Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import BlockchainBlock from './BlockchainBlock';

function Distributed() {
  const [toggleChain, setToggleChain] = useState(true);
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

  useEffect(() => {
    const lastBlock = chain[0].length - 1;
    var hashCount = chain.reduce((acc, cur) => {
      acc[cur[lastBlock]['hash']] = (acc[cur[lastBlock]['hash']] || 0) + 1;
      return acc;
    }, {});
    console.log(hashCount);
    const validHash = Object.keys(hashCount).reduce((acc, value) =>
      hashCount[acc] > hashCount[value] ? acc : value
    );
    console.log(validHash);
  }, [toggleChain]);

  function updateChainValue(blockNumber, fieldName, fieldValue, node) {
    setChain((draft) => {
      draft[node][blockNumber][fieldName] = fieldValue;
    });
    if (fieldName === 'hash') {
      //"1234...": 1;
      //"2345...": 2
      if (blockNumber === chain[node].length - 1) {
        setToggleChain((c) => !c);
      }
    }
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
      const previousHashValue = chain[index][block.blockNumber - 1].hash;
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
          <>
            <Heading my='5'>Node {index}</Heading>
            <Grid
              maxW='100%'
              overflowX='scroll'
              templateColumns='repeat(5, 1fr)'
            >
              {getBlockchainBlocks(blockchain, index)}
            </Grid>
          </>
        );
      })}
    </>
  );
}

export default Distributed;
