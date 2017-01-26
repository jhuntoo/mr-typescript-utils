import {BigNumber} from 'bignumber.js';
import {isDefined} from './object';

export function toNumber(n: BigNumber): number | undefined {
    return isDefined(n) ? n.toNumber() : undefined;
}


export function sumBy<T>(array: T[], propGetter: (val: T) => BigNumber): BigNumber {
    const sum =
        array.map((element: T) => propGetter(element))
            .reduce((a: BigNumber, b :BigNumber) => a.plus(b), new BigNumber(0));
    return sum;
}

export function sum(array: BigNumber[]): BigNumber {
    const sum  =array.reduce((a, b) => {
        return a.plus(b);
    }, new BigNumber(0));
    return sum;
}