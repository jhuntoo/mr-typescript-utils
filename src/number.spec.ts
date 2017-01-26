import {sumBy} from './number';
import * as assert from 'assert';
import {BigNumber} from 'bignumber.js';

describe('sumBy', () => {
    it('returns correct sum of ints', () => {
        assert.equal(sumByFor([1, 2, 3]).toNumber(), 6);
    });
})
;

function sumByFor(values: number[]): BigNumber {
    return sumBy(buildArray(values), v => v.num);
}

function buildArray(values: number[]): TestType[] {
    return values.map(v => {
        return {num: new BigNumber(v)}
    });
}

interface TestType {
    num: BigNumber;
}