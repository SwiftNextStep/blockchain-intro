import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import Transaction from './Transaction';

function TransactionsList() {
  const [transactions, setTransactions] = useImmer([
    {
      id: 1,
      amount: 10,
      from: 'me',
      to: 'you',
    },
    {
      id: 2,
      amount: 5,
      from: 'you',
      to: 'me',
    },
    {
      id: 3,
      amount: 1,
      from: 'me',
      to: 'you',
    },
  ]);
  return (
    <Box bg='white' borderRadius='md' p='1'>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} />
      ))}
    </Box>
  );
}

export default TransactionsList;
