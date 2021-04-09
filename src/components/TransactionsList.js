import { Box } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import Transaction from './Transaction';

function TransactionsList({ updateData, blockNumber, transactions }) {
  //const [transactions, setTransactions] = useImmer();

  useEffect(() => {
    updateData(blockNumber, 'data', transactions);
  }, [transactions]);

  function updateValue(id, name, value) {
    // setTransactions((draft) => {
    //   draft[id][name] = value;
    // });
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
