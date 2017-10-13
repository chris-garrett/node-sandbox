import { assert } from 'chai';
import { syncFunc, asyncFunc} from './babel-config';

/**
 * testing that babel-preset-env and additional plugins
 * I like are working.
 */
describe('babel config tests', () => {

  it('sync tests', () => {
    const actual = syncFunc();
    assert.equal(actual, 'I\'m a sync func!');
  });

  it('async tests', async () => {
    const actual = await asyncFunc();
    assert.equal(actual, 'I\'m an async func!');
  });

  it('rest/spread tests', async () => {
    const as = { a: 1, b: 2, c: 3 };

    // rest
    const { a, b } = as;
    assert.equal(a, 1);
    assert.equal(b, 2);

    // spread
    const bs = { y: 6, z: 7, ...as };
    assert.equal(bs.a, 1);
    assert.equal(bs.b, 2);
    assert.equal(bs.c, 3);
    assert.equal(bs.y, 6);
    assert.equal(bs.z, 7);
  });

});
