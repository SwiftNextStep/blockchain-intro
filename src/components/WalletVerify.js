import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import { sha256Hash } from '../blockchain/util/hash';
import { verifyTransaction } from '../blockchain/util/wallet';

function WalletVerify({ walletData, updateWalletData }) {
  const [data, setData] = useState('');
  const [isValid, setIsValid] = useState(false);

  function updateData(e) {
    const formData = e.target.value;
    setData(formData);
  }

  function handleVerify() {
    const signResult = verifyTransaction({
      data,
      publicKey: walletData.publicKey,
      signature: walletData.signature,
    });
    setIsValid(signResult);
  }

  return (
    <Container maxW='80%' mt='3'>
      <Heading mb='3'>Verify Transaction</Heading>
      <Box bg={isValid ? 'green.100' : 'red.100'} padding='6' borderRadius='md'>
        <Text>Data:</Text>
        <Textarea bg='white' mb='2' onChange={updateData} />
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

export default WalletVerify;
