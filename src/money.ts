import {BigNumber} from 'bignumber.js';
export function expressInLowestUnit(currency: string, amount: BigNumber): BigNumber {
  switch (currency) {
    case 'GBP': return amount.times(100).round(0);
    default: throw new Error('Unknown');
  }
}