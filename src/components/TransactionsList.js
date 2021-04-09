import { Box } from '@chakra-ui/layout';
import React from 'react';
import Transaction from './Transaction';

function TransactionsList() {
  return (
    <Box bg='white' borderRadius='md' p='1'>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </Box>
  );
}

export default TransactionsList;
