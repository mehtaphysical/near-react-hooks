import React, { useEffect, useState } from 'react'
import { getConfig } from './config'
import { Near, ConnectConfig, WalletConnection, connect, keyStores } from 'near-api-js'
import { NearEnvironment } from './NearEnvironment'

/**
 * @ignore
 */
export interface NearContextType {
  near?: Near
  wallet?: WalletConnection
}

/**
 * @ignore
 */
export const NearContext = React.createContext<NearContextType>({})

/**
 * @ignore
 */
export type NearProviderProps = ConnectConfig & {
  environment?: NearEnvironment
  networkId?: string
  nodeUrl?: string
}

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
export const NearProvider: React.FC<NearProviderProps> = ({ environment = NearEnvironment.TestNet, children, ...props }) => {
  const config: ConnectConfig = {
    ...getConfig(environment),
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
    ...props
  }

  const [near, setNear] = useState<Near>()
  const [wallet, setWallet] = useState<WalletConnection>()

  useEffect(() => {
    async function setup (): Promise<void> {
      const near = await connect(config)
      const wallet = new WalletConnection(near, null)

      setNear(near)
      setWallet(wallet)
    }

    setup()
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <NearContext.Provider value={{ near, wallet }}>
      {near !== undefined && wallet !== undefined ? children : null}
    </NearContext.Provider>
  )
}
