export const ARC_CHAIN = {
  "id": 5042002,
  "name": "Arc Testnet",
  "rpc": "https://rpc.testnet.arc.network",
  "explorer": "https://testnet.arcscan.app",
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 6
  }
};

export function formatUsdc(units){const value=BigInt(units);const whole=value/1000000n;const frac=String(value%1000000n).padStart(6,'0').replace(/0+$/,'');return frac?`${whole}.${frac} USDC`:`${whole} USDC`;}
export function txUrl(hash){if(!/^0x[0-9a-fA-F]{64}$/.test(hash))throw new Error('invalid tx hash');return `${ARC_CHAIN.explorer}/tx/${hash}`;}
export function gasBudget({transactions,avgGasUsdc}){const tx=BigInt(transactions);const gas=BigInt(avgGasUsdc);return {transactions:Number(tx),totalGasUsdc:(tx*gas).toString(),formatted:formatUsdc(tx*gas)};}
export function shouldTopUp(balance,minimum){return BigInt(balance)<BigInt(minimum);}
