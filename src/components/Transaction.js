import React from 'react';
import { Input } from '@chakra-ui/input';
import { InputLeftElement } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import { StatDownArrow } from '@chakra-ui/stat';
import { StatUpArrow } from '@chakra-ui/stat';

function Transaction({ transaction: { amount, to, from, id } }) {
  return (
    <HStack spacing='1'>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children='$'
        />
        <Input placeholder='Amount' value={amount} />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children={<StatUpArrow color='gray.300' />}
        />
        <Input placeholder='from' value={from} />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children={<StatDownArrow color='gray.300' />}
        />
        <Input placeholder='to' value='to' />
      </InputGroup>
    </HStack>
  );
}

export default Transaction;
