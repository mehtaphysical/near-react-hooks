import { getConfig } from '../config'
import { NearEnvironment } from '../NearEnvironment'

describe('config function', () => {
  it('gets the MainNet config', () => {
    const config = getConfig(NearEnvironment.MainNet)

    expect(config).toEqual({
      networkId: 'mainnet',
      nodeUrl: 'https://rpc.mainnet.near.org',
      walletUrl: 'https://wallet.near.org',
      helperUrl: 'https://helper.mainnet.near.org'
    })
  })

  it('gets the BetaNet config', () => {
    const config = getConfig(NearEnvironment.BetaNet)

    expect(config).toEqual({
      networkId: 'betanet',
      nodeUrl: 'https://rpc.betanet.near.org',
      walletUrl: 'https://wallet.betanet.near.org',
      helperUrl: 'https://helper.betanet.near.org'
    })
  })

  it('gets the Test config', () => {
    const config = getConfig(NearEnvironment.Test)

    expect(config).toEqual({
      networkId: 'shared-test',
      nodeUrl: 'https://rpc.ci-testnet.near.org',
      masterAccount: 'test.near'
    })
  })

  it('gets the TestNet config', () => {
    const config = getConfig(NearEnvironment.TestNet)

    expect(config).toEqual({
      networkId: 'testnet',
      nodeUrl: 'https://rpc.testnet.near.org',
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org'
    })
  })

  it('defaults to the TestNet config', () => {
    const config = getConfig()

    expect(config).toEqual({
      networkId: 'testnet',
      nodeUrl: 'https://rpc.testnet.near.org',
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org'
    })
  })
})
