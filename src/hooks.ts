import { useContext } from 'react';
import { Account } from 'near-api-js';
import { NearContext } from './provider';

export const useNear = () => {
  const { near } = useContext(NearContext);
  return near;
};

export const useNearWallet = () => {
  const { wallet } = useContext(NearContext);
  return wallet;
};

export const useNearAccount = (): Account => {
  const wallet = useNearWallet();
  return wallet.account();
};
