/**
 * There are four NearEnvironments that can be automatically configured
 * using near-react-hooks. `MainNet`, `TestNet`, `BetaNet`, and `Test`.
 * These four environments are represented by the `NearEnvironment` enum.
 */

/**
 * This enum is used to automatically configure the {@link NearProvider}
 * to connect to either `MainNet`, `TestNet`, or `BetaNet`.
 */
export enum NearEnvironment {
  MainNet = 'mainnet',
  TestNet = 'testnet',
  BetaNet = 'betanet',
  Test = 'test'
}
