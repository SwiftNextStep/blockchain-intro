import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import { sha256Hash } from '../blockchain/util/hash';

function WalletVerify({ walletData, updateWalletData }) {
  const [data, setData] = useState('');
  const [sha256, setSha256] = useState();
  useEffect(() => {
    const hashedData = sha256Hash(data);
    setSha256(hashedData);
  }, [data]);

  function updateData(e) {
    const formData = e.target.value;
    setData(formData);
  }

  return (
    <Container maxW='80%' mt='3'>
      <Heading mb='3'>Verify Transaction</Heading>
      <Box bg='green.100' padding='6' borderRadius='md'>
        <Text>Data:</Text>
        <Textarea bg='white' mb='2' onChange={updateData} />
        <Text>Public Key:</Text>
        <Input bg='white' mb='2' value={sha256} />
        <Text>Signature:</Text>
        <Input bg='white' mb='2' value={sha256} />
        <Button colorScheme='blue'>Verify Signature</Button>
      </Box>
    </Container>
  );
}

export default WalletVerify;
