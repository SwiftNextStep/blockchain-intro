import { Container } from '@chakra-ui/layout';
import React from 'react';
import Wallet from './Wallet';
import WalletSign from './WalletSign';
import WalletVerify from './WalletVerify';

function WalletSignAndVerify() {
  return (
    <>
      <Wallet />
      <WalletSign />
      <WalletVerify />
    </>
  );
}

export default WalletSignAndVerify;
