import { Contract, Near, WalletConnection } from 'near-api-js';
export declare const useNear: () => Near;
export declare const useNearWallet: () => WalletConnection;
/**
  * Define a smart contract on **NEAR**
  * ```js
  * const contract = useNearContract('dev-345324325324', {
  *   viewMethods: ['getCount'],
  *   changeMethods: ['increment', 'decrement']
  * });
  * ```
  *
  * @param contractId  The id of the smart contract
  * @param contractMethods The methods defined on the smart contract
  */
export declare const useNearContract: (contractId: string, contractMethods: {
    viewMethods: string[];
    changeMethods: string[];
}) => Contract;
