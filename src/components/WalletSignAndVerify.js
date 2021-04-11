import { Container } from '@chakra-ui/layout';
import React from 'react';
import { useImmer } from 'use-immer';
import Wallet from './Wallet';
import WalletSign from './WalletSign';
import WalletVerify from './WalletVerify';

function WalletSignAndVerify() {
  const [walletData, setWalletData] = useImmer({
    publicKey: '',
    privateKey: '',
    data: '',
    signature: '',
    isSignatureValid: false,
  });
  return (
    <>
      <Wallet walletData={walletData} setWalletData={setWalletData} />
      <WalletSign walletData={walletData} setWalletData={setWalletData} />
      <WalletVerify walletData={walletData} setWalletData={setWalletData} />
    </>
  );
}

export default WalletSignAndVerify;
