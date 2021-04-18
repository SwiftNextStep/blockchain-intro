import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState } from 'react';
import { signTransaction } from '../../blockchain/util/wallet';
import TransactionsListWallet from './TransactionsListWallet';

function WalletSignWithTransactions({
  walletData,
  updateWalletData,
  updateTransactionValue,
}) {
  function handleSignTransaction() {
    const sign = signTransaction(walletData.privateKey, walletData.data);
    console.log('sign', sign);
    updateWalletData('signature', sign);
  }

  return (
    <Container maxW='80%' mt='3'>
      <Heading mb='3'>Sign Transaction</Heading>
      <Box bg='green.100' padding='6' borderRadius='md'>
        <Text>Transactions:</Text>
        <TransactionsListWallet
          transactions={walletData.data}
          updateTransactionValue={updateTransactionValue}
        />
        <Text>Private Key:</Text>
        <Input bg='white' mb='2' value={walletData.privateKey} />
        <Button colorScheme='blue' onClick={handleSignTransaction}>
          Sign Transaction
        </Button>
        <Text mt='2'>Signature:</Text>
        <Input bg='white' mb='2' value={walletData.signature} />
      </Box>
    </Container>
  );
}

export default WalletSignWithTransactions;
