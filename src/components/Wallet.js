import { Button } from '@chakra-ui/button';
import { LinkIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { InputLeftElement } from '@chakra-ui/input';
import { InputLeftAddon } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import { sha256Hash } from '../blockchain/util/hash';

function Wallet() {
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
    <Container maxW='80%' mt='6'>
      <Heading mb='10'>Wallet</Heading>
      <Box bg='green.100' padding='6' borderRadius='md'>
        <Text>Public Key:</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<UnlockIcon color='gray.300' />}
          />
          <Input bg='white' mb='2' onChange={updateData} />
        </InputGroup>
        <Text>Private Key:</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<LockIcon color='gray.300' />}
          />
          <Input bg='white' mb='6' value={sha256} />
        </InputGroup>
        <Button colorScheme='blue' rightIcon={<LinkIcon />}>
          Create Wallet
        </Button>
      </Box>
    </Container>
  );
}

export default Wallet;
