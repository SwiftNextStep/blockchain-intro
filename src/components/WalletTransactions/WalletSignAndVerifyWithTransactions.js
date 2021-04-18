import React from 'react';
import { useImmer } from 'use-immer';
import Wallet from './WalletWithTransactions';
import WalletSign from './WalletSignWithTransactions';
import WalletVerify from './WalletVerifyWithTransactions';

function WalletSignAndVerifyWithTransactions() {
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

export default WalletSignAndVerifyWithTransactions;
