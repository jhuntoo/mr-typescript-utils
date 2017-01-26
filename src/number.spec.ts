import {sumBy, toNumber} from './number';
import {expect} from 'chai';
import * as assert from 'assert';
import {BigNumber} from 'bignumber.js';

describe('sumBy', () => {
    it('returns correct sum of ints', () => {
        assert.equal(sumByFor([1, 2, 3]).toNumber(), 6);
    });
});

describe('toNumber', () => {
    it('returns undefined when given undefined', () => {
        let number: any = undefined;
       expect(toNumber(number)).to.be.undefined;
    });
    it('returns undefined when given null', () => {
        let number: any = null;
        expect(toNumber(number)).to.be.undefined;
    });
    it('returns a valid `BigNumber` when given a `number`', () => {
        expect(toNumber(new BigNumber(10))).to.equal(10);
    });
});


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