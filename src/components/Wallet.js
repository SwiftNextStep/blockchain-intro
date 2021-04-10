import { Button } from '@chakra-ui/button';
import { LinkIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { InputLeftElement } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import React, { useState } from 'react';

function Wallet() {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  function handleCreateWallet() {}

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
          <Input bg='white' mb='2' value={publicKey} />
        </InputGroup>
        <Text>Private Key:</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<LockIcon color='gray.300' />}
          />
          <Input bg='white' mb='6' value={privateKey} />
        </InputGroup>
        <Button
          colorScheme='blue'
          rightIcon={<LinkIcon />}
          onClick={handleCreateWallet}
        >
          Create Wallet
        </Button>
      </Box>
    </Container>
  );
}

export default Wallet;
