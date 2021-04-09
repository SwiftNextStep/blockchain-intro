import { Box } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import Transaction from './Transaction';

function TransactionsList({
  updateTransactionValue,
  blockNumber,
  transactions,
}) {
  function updateValue(id, name, value) {
    updateTransactionValue(blockNumber, id, name, value);
  }
  return (
    <Box bg='white' borderRadius='md' p='1'>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} updateValue={updateValue} />
      ))}
    </Box>
  );
}

export default TransactionsList;
