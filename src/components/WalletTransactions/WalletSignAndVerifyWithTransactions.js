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
        id: 0,
      },
      {
        amount: 3,
        to: 'me',
        from: 'you',
        id: 1,
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

  function updateTransactionValue(transactionId, fieldName, fieldValue) {
    if (
      JSON.stringify(walletData['data'][transactionId][fieldName]) ===
      JSON.stringify(fieldValue)
    ) {
      return;
    }
    setWalletData((draft) => {
      draft['data'][transactionId][fieldName] = fieldValue;
    });
  }

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
