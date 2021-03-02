import React from 'react';
import { NearEnvironment, getConfig } from './config';

const NearContext = React.createContext(null);

export interface NearProviderProps {
  environment?: NearEnvironment
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://wallet.near.org',
  helperUrl: 'https://helper.mainnet.near.org',
  explorerUrl: 'https://explorer.mainnet.near.org',
}

export const NearProvider: React.FC<NearProviderProps> = ({ environment, children }) => {
  const config = getConfig(environment);


  return (
    <NearContext.Provider value={{}}>
      {children}
    </NearContext.Provider>
  )
}
