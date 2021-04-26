import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { ModalContent } from '@chakra-ui/modal';
import { ModalCloseButton } from '@chakra-ui/modal';
import { ModalFooter } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalOverlay } from '@chakra-ui/modal';
import { Modal } from '@chakra-ui/modal';
import React, { useRef } from 'react';

function PrivateKeyModal({ isOpen, onOpen, onClose }) {
  const initialRef = useRef();
  return (
    <Modal isOpen={isOpen} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign your transaction</ModalHeader>
        <ModalBody>
          <FormControl>
            <Input ref={initialRef} placeholder='Enter your private key' />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr='3'>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PrivateKeyModal;
