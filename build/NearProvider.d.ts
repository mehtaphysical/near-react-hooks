import React from 'react';
import { Near, ConnectConfig, WalletConnection } from 'near-api-js';
import { NearEnvironment } from './NearEnvironment';
/**
 * @ignore
 */
export interface NearContextType {
    near?: Near;
    wallet?: WalletConnection;
}
/**
 * @ignore
 */
export declare const NearContext: React.Context<NearContextType>;
/**
 * @ignore
 */
export declare type NearProviderProps = ConnectConfig & {
    environment?: NearEnvironment;
    networkId?: string;
    nodeUrl?: string;
};
/**
 * `NearProvider` sets up `Near` and a `WalletConnection`. These values are accessible
 * using the provided hooks: `useNear` and `useNearWallet`.
 *
 * @example
 * ```js
 * <NearProvider environment={NearEnvironment.MainNet}>
 *  <App />
 * </NearProvider>
 * ```
 */
export declare const NearProvider: React.FC<NearProviderProps>;
