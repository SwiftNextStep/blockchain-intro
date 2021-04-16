import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState } from 'react';
import { signTransaction } from '../blockchain/util/wallet';

function WalletSign({ walletData, updateWalletData }) {
  const [data, setData] = useState('');

  function handleSignTransaction() {
    const sign = signTransaction(walletData.privateKey, data);
    console.log('sign', sign);
    updateWalletData('signature', sign);
  }

  return (
    <Container maxW='80%' mt='3'>
      <Heading mb='3'>Sign Transaction</Heading>
      <Box bg='green.100' padding='6' borderRadius='md'>
        <Text>Data:</Text>
        <Textarea
          bg='white'
          mb='2'
          onChange={(e) => setData(e.target.value)}
          value={data}
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

export default WalletSign;
