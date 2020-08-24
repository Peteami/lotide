const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArrayEqual = require('../assertArrayEqual');


// assertArrayEqual([1, 2, 3], [1, 5, 6]); // => false
// assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true



describe("assertArrayEqual", () => {

  it("returns false for ([1, 2, 3]), [1, 5, 6])", () => {
    assert.strictEqual(assertArrayEqual([1, 2, 3]), [1, 5, 6]);
  })

  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(assertArrayEqual([1, 2, 3]), [1, 2, 3]);
  })

});