import { useContext } from 'react'
import { Contract, Near, WalletConnection } from 'near-api-js'
import { NearContext } from './NearProvider'

export const useNear = (): Near => {
  const { near } = useContext(NearContext)

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  return near as Near
}

export const useNearWallet = (): WalletConnection => {
  const { wallet } = useContext(NearContext)

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  return wallet as WalletConnection
}

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
export const useNearContract = (contractId: string, contractMethods: { viewMethods: string[], changeMethods: string[] }): Contract => {
  const wallet = useNearWallet()
  return new Contract(wallet.account(), contractId, contractMethods)
}
