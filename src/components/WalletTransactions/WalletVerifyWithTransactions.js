import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { verifyTransaction } from '../../blockchain/util/wallet';
import TransactionsListWallet from './TransactionsListWallet';

function WalletVerifyWithTransactions({
  walletData,
  updateWalletData,
  updateTransactionValue,
}) {
  const [isValid, setIsValid] = useState(false);

  function handleVerify() {
    const signResult = verifyTransaction({
      data: walletData.data,
      publicKey: walletData.publicKey,
      signature: walletData.signature,
    });
    setIsValid(signResult);
  }

  return (
    <Container maxW='80%' mt='3'>
      <Heading mb='3'>Verify Transaction</Heading>
      <Box bg={isValid ? 'green.100' : 'red.100'} padding='6' borderRadius='md'>
        <Text>Transactions:</Text>
        <TransactionsListWallet
          transactions={walletData.data}
          updateTransactionValue={updateTransactionValue}
        />
        <Text>Public Key:</Text>
        <Input
          bg='white'
          mb='2'
          value={walletData.publicKey}
          onChange={(e) => updateWalletData('publicKey', e.target.value)}
        />
        <Text>Signature:</Text>
        <Input
          bg='white'
          mb='2'
          value={walletData.signature}
          onChange={(e) => updateWalletData('signature', e.target.value)}
        />
        <Button colorScheme='blue' onClick={handleVerify}>
          Verify Signature
        </Button>
      </Box>
    </Container>
  );
}

export default WalletVerifyWithTransactions;
