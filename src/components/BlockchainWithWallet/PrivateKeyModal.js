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
import React, { useRef, useState } from 'react';
import { signTransaction } from '../../blockchain/util/wallet';

function PrivateKeyModal({
  isOpen,
  onOpen,
  onClose,
  transaction,
  updateValue,
}) {
  const [privateKey, setPrivateKey] = useState('');
  const initialRef = useRef();
  function handleSign() {
    const tempTransaction = { ...transaction };
    delete tempTransaction.signed;
    const signed = signTransaction(privateKey, tempTransaction);
    updateValue(transaction.id, 'signed', signed);
    onClose();
  }
  return (
    <Modal isOpen={isOpen} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign your transaction</ModalHeader>
        <ModalBody>
          <FormControl>
            <Input
              onChange={(e) => setPrivateKey(e.target.value)}
              value={privateKey}
              ref={initialRef}
              placeholder='Enter your private key'
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr='3' onClick={handleSign}>
            Sign
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PrivateKeyModal;
