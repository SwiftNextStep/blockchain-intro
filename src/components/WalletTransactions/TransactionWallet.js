import React from 'react';
import { Input } from '@chakra-ui/input';
import { InputLeftElement } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import { StatDownArrow } from '@chakra-ui/stat';
import { StatUpArrow } from '@chakra-ui/stat';

function TransactionWallet({ updateValue, transaction }) {
  const { amount, to, from, id } = transaction;
  return (
    <HStack spacing='1'>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children='$'
        />
        <Input
          placeholder='Amount'
          value={amount}
          onChange={(e) => updateValue(id, 'amount', Number(e.target.value))}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children={<StatUpArrow color='gray.300' />}
        />
        <Input
          placeholder='from'
          value={from}
          onChange={(e) => updateValue(id, 'from', e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children={<StatDownArrow color='gray.300' />}
        />
        <Input
          placeholder='to'
          value={to}
          onChange={(e) => updateValue(id, 'to', e.target.value)}
        />
      </InputGroup>
    </HStack>
  );
}

export default TransactionWallet;
