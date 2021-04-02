import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import { sha256Hash } from '../blockchain/util/hash';

function Block() {
  const [blockNumber, setBlockNumber] = useState(1);
  const [nonce, setNonce] = useState(0);
  const [data, setData] = useState('');
  const [sha256, setSha256] = useState();
  useEffect(() => {
    const hashedData = sha256Hash(data);
    setSha256(hashedData);
  }, [data]);

  return (
    <Container maxW='80%' mt='6'>
      <Heading mb='10'>Block</Heading>
      <Box bg='green.100' padding='6' borderRadius='md'>
        <Text>Block Number:</Text>
        <Input
          bg='white'
          mb='6'
          value={blockNumber}
          onChange={(e) => {
            setBlockNumber(e.target.value);
          }}
        />
        <Text>nonce:</Text>
        <Input
          bg='white'
          mb='6'
          value={nonce}
          onChange={(e) => {
            setNonce(e.target.value);
          }}
        />
        <Text>Data:</Text>
        <Textarea
          bg='white'
          mb='2'
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <Text>Hash:</Text>
        <Input bg='white' mb='6' value={sha256} />
        <Button colorScheme='blue'>Calculate SHA256</Button>
      </Box>
    </Container>
  );
}

export default Block;
