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
  function updateWalletData(field, value) {
    setWalletData((draft) => {
      draft[field] = value;
    });
  }
  return (
    <>
      <Wallet updateWalletData={updateWalletData} />
      <WalletSign walletData={walletData} updateWalletData={updateWalletData} />
      <WalletVerify
        walletData={walletData}
        updateWalletData={updateWalletData}
      />
    </>
  );
}

export default WalletSignAndVerify;
