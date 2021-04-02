import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';

function Sha256Hash() {
  return (
    <>
      <Heading mb='10'>SHA256 Hash</Heading>
      <Container>
        <Box bg='green.100' padding='6' borderRadius='md'>
          <Text>Data:</Text>
          <Textarea bg='white' mb='2' />
          <Text>SHA256:</Text>
          <Input bg='white' mb='6' />
          <Button colorScheme='blue'>Calculate SHA256</Button>
        </Box>
      </Container>
    </>
  );
}

export default Sha256Hash;
