import {expect} from 'chai';
import {expressInLowestUnit} from './money';
import {BigNumber} from 'bignumber.js';

describe('expressInLowestUnit', () => {
  describe('Valid amounts', () => {
    const tests = [
      { amount: 1.75, currency: 'GBP', expect: 175 },
      { amount: 1.75000000001 , currency: 'GBP', expect: 175 },
      { amount: 1, currency: 'GBP', expect: 100 },
      { amount: 0, currency: 'GBP', expect: 0 }
    ];

    tests.forEach((test) => {
      it(`correctly converts '${test.amount}' to '${test.expect}' as the lowest unit of currency (${test.currency})`, () => {
        expect(expressInLowestUnit(test.currency, new BigNumber(test.amount)).toNumber()).to.equal(test.expect);
      });
    });
  });
  describe('Other than GBP', () => {
    it(`should fail`, () => {
      expect(() => expressInLowestUnit('USD', new BigNumber(1.00))).to.throw;
    });
  });
});