import {BigNumber} from 'bignumber.js';

export function sumBy<T>(array: BigNumber[], propGetter: (T) => BigNumber): BigNumber {
    const sum = array.reduce((a, b) => {
        return propGetter(a).plus(propGetter(b));
    }, BigNumber(0));
    return sum;
}

export function sum(array: BigNumber[]): BigNumber {
    const sum  =array.reduce((a, b) => {
        return a.plus(b);
    }, BigNumber(0));
    return sum;
}