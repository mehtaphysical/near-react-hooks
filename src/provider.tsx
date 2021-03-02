import React, { useEffect, useState } from 'react';
import { NearEnvironment, getConfig } from './config';
import { Near, ConnectConfig, WalletConnection, connect, keyStores } from 'near-api-js';

export type NearContextType = {
  near: Near;
  wallet: WalletConnection;
}

export const NearContext = React.createContext<NearContextType>(null);

export type NearProviderProps = ConnectConfig & {
  environment?: NearEnvironment;
  networkId?: string;
  nodeUrl?: string;
}

export const NearProvider: React.FC<NearProviderProps> = ({ environment, children, ...props }) => {
  const config: ConnectConfig = {
    ...getConfig(environment),
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
    ...props,
  };

  const [near, setNear] = useState(null);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    async function setup() {
      const near = await connect(config);
      const wallet = new WalletConnection(near, null);

      setNear(near);
      setWallet(wallet);
    }

    setup();
  }, [])


  return (
    <NearContext.Provider value={{ near, wallet }}>
      {children}
    </NearContext.Provider>
  )
}
