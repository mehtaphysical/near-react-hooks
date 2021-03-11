import React from 'react';
import { NearEnvironment } from './config';
import { Near, ConnectConfig, WalletConnection } from 'near-api-js';
export interface NearContextType {
    near?: Near;
    wallet?: WalletConnection;
}
export declare const NearContext: React.Context<NearContextType>;
export declare type NearProviderProps = ConnectConfig & {
    environment?: NearEnvironment;
    networkId?: string;
    nodeUrl?: string;
};
export declare const NearProvider: React.FC<NearProviderProps>;
