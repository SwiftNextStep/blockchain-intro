import React from 'react';
import { Input } from '@chakra-ui/input';
import { InputLeftElement } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import { StatDownArrow } from '@chakra-ui/stat';
import { StatUpArrow } from '@chakra-ui/stat';
import { VStack } from '@chakra-ui/layout';
import { LockIcon } from '@chakra-ui/icons';
import { Modal } from '@chakra-ui/modal';
import PrivateKeyModal from './PrivateKeyModal';
import { useDisclosure } from '@chakra-ui/hooks';

function Transaction({ updateValue, transaction }) {
  const { amount, to, from, id } = transaction;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PrivateKeyModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <VStack spacing='0' mb='2'>
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
              onChange={(e) =>
                updateValue(id, 'amount', Number(e.target.value))
              }
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
        <InputGroup onClick={onOpen}>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children={<LockIcon color='gray.300' />}
          />
          <Input
            placeholder='to'
            value={to}
            onChange={(e) => updateValue(id, 'to', e.target.value)}
          />
        </InputGroup>
      </VStack>
    </>
  );
}

export default Transaction;
