import {BigNumber} from 'bignumber.js';

export function sumBy<T>(array: T[], propGetter: (T) => BigNumber): BigNumber {
    const sum = array.reduce((a, b) => {
        return propGetter(a).plus(propGetter(b));
    }, new BigNumber(0));
    return sum;
}

export function sum(array: BigNumber[]): BigNumber {
    const sum  =array.reduce((a, b) => {
        return a.plus(b);
    }, new BigNumber(0));
    return sum;
}