/* eslint @typescript-eslint/explicit-function-return-type: 0 */

import { add } from '../src';

describe('add', () => {
  test('should add 2 numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
