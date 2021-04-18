import { Box } from '@chakra-ui/layout';
import React from 'react';
import Transaction from './TransactionWallet';

function TransactionsListWallet({ updateTransactionValue, transactions }) {
  function updateValue(id, name, value) {
    updateTransactionValue(id, name, value);
  }
  return (
    <Box bg='white' borderRadius='md' p='1'>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} updateValue={updateValue} />
      ))}
    </Box>
  );
}

export default TransactionsListWallet;
