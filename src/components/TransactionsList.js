import { Input } from '@chakra-ui/input';
import { InputLeftElement } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { StatDownArrow } from '@chakra-ui/stat';
import { StatUpArrow } from '@chakra-ui/stat';
import React from 'react';

function TransactionsList() {
  return (
    <Box bg='white' borderRadius='md' p='1'>
      <HStack spacing='1'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children='$'
          />
          <Input placeholder='Amount' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children={<StatUpArrow color='gray.300' />}
          />
          <Input placeholder='from' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children={<StatDownArrow color='gray.300' />}
          />
          <Input placeholder='to' />
        </InputGroup>
      </HStack>
    </Box>
  );
}

export default TransactionsList;
