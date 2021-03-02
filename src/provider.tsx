import React from 'react';
import { NearEnvironment, getConfig } from './config';
import { ConnectConfig, connect } from 'near-api-js';

const NearContext = React.createContext(null);

export type NearProviderProps = ConnectConfig & {
  environment?: NearEnvironment;
  networkId?: string;
  nodeUrl?: string;
}

export const NearProvider: React.FC<NearProviderProps> = ({ environment, children, ...props }) => {
  const config = { ...getConfig(environment), ...props };


  return (
    <NearContext.Provider value={{}}>
      {children}
    </NearContext.Provider>
  )
}
