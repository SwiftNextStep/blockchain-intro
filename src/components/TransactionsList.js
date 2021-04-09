import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import Transaction from './Transaction';

function TransactionsList() {
  const [transactions, setTransactions] = useImmer([
    {
      id: 0,
      amount: 10,
      from: 'me',
      to: 'you',
    },
    {
      id: 1,
      amount: 5,
      from: 'you',
      to: 'me',
    },
    {
      id: 2,
      amount: 1,
      from: 'me',
      to: 'you',
    },
  ]);
  function updateValue(id, name, value) {
    setTransactions((draft) => {
      draft[id][name] = value;
    });
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
