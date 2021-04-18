import React from 'react';
import { useImmer } from 'use-immer';
import Wallet from './WalletWithTransactions';
import WalletSign from './WalletSignWithTransactions';
import WalletVerify from './WalletVerifyWithTransactions';

function WalletSignAndVerifyWithTransactions() {
  const [walletData, setWalletData] = useImmer({
    publicKey: '',
    privateKey: '',
    data: [
      {
        amount: 1,
        to: 'you',
        from: 'me',
        id: 1,
      },
      {
        amount: 3,
        to: 'me',
        from: 'you',
        id: 2,
      },
    ],
    signature: '',
    isSignatureValid: false,
  });
  function updateWalletData(field, value) {
    setWalletData((draft) => {
      draft[field] = value;
    });
  }
  function updateTransactionValue() {}

  return (
    <>
      <Wallet updateWalletData={updateWalletData} />
      <WalletSign
        walletData={walletData}
        updateWalletData={updateWalletData}
        updateTransactionValue={updateTransactionValue}
      />
      <WalletVerify
        walletData={walletData}
        updateWalletData={updateWalletData}
        updateTransactionValue={updateTransactionValue}
      />
    </>
  );
}

export default WalletSignAndVerifyWithTransactions;
