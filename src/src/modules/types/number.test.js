import { assert } from 'chai';
import { parseMoney, formatMoney } from './number';

describe('number tests', () => {

  it('parse', () => {
    const moneySource = '680,984.32';
    const money = parseMoney(moneySource);
    assert.equal(money, Number(680984.32));
  });

  it('format', () => {
    const money = Number(680984.32);
    const moneyFormatted = formatMoney(money);
    assert.equal(moneyFormatted, '$680,984.32');
  });
});
