import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState, use } from 'react';

function Sha256Hash() {
  const [data, setData] = useState('');
  const [sha256, setSha256] = useState();
  useEffect(() => {
    setSha256(data);
  }, [data]);

  function updateData(e) {
    const formData = e.target.value;
    setData(formData);
  }

  return (
    <>
      <Heading mb='10'>SHA256 Hash</Heading>
      <Container>
        <Box bg='green.100' padding='6' borderRadius='md'>
          <Text>Data:</Text>
          <Textarea bg='white' mb='2' onChange={updateData} />
          <Text>SHA256:</Text>
          <Input bg='white' mb='6' value={sha256} />
          <Button colorScheme='blue'>Calculate SHA256</Button>
        </Box>
      </Container>
    </>
  );
}

export default Sha256Hash;
