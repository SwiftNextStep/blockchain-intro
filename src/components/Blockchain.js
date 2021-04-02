import { Grid } from '@chakra-ui/layout';
import React from 'react';
import BlockchainBlock from './BlockchainBlock';

function Blockchain() {
  return (
    <Grid maxW='100%' overflowX='scroll' templateColumns='repeat(5, 1fr)'>
      <BlockchainBlock />
      <BlockchainBlock />
      <BlockchainBlock />
      <BlockchainBlock />
      <BlockchainBlock />
    </Grid>
  );
}

export default Blockchain;
