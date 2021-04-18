import { Button } from '@chakra-ui/button';
import { LinkIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { InputLeftElement } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { getSecp256Keys } from '../../blockchain/util/wallet';

function WalletWithTransactions({ updateWalletData }) {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  useEffect(() => {
    updateWalletData('publicKey', publicKey);
    updateWalletData('privateKey', privateKey);
  }, [publicKey, privateKey]);

  function handleCreateWallet() {
    const { publicKey, privateKey } = getSecp256Keys();
    console.log('publicKey: ', publicKey);
    console.log('privateKey: ', privateKey);
    setPublicKey(publicKey);
    setPrivateKey(privateKey);
  }

  return (
    <Container maxW='80%' mt='3'>
      <Heading mb='3'>Wallet</Heading>
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
          <Input bg='white' mb='2' value={privateKey} />
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

export default WalletWithTransactions;
