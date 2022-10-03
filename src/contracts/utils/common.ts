export type AddressType  = {
    97: string;
    56: string;
  }
  
  export enum CHAIN_ID {
    TESTNET = 97,
    MAINNET = 56,
  }
  
  export default function getChainIdFromEnv(): number {
    const env = process.env.NEXT_PUBLIC_CHAIN_ID;
    if (!env) { return 97;}
    return parseInt(env);
  }
  
  
  export const getRPC = () => {
    if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
      return process.env.NEXT_PUBLIC_RPC_MAINNET;
    return process.env.NEXT_PUBLIC_RPC_TESTNET;
  }
  export const SMART_ADDRESS = {
    CROWD_SALE: {97: '0xfbD211a4371C1f26c16F735AC75c6CF159D3cEB9', 56: ''},
    USDT: {97: '0x14d3DF3A2bE214dE6E7489dd88db6FD2fC626086', 56: ''},
    NFT: {97: '0xf70f201aC96bBe6e77835BeB599f2B9f98b5f6D2', 56: ''},
    MARKET: {97: '0xB35525a03bC1e0dAE7BAC2f2c40ec0a658e0Ae95', 56: ''},
  }