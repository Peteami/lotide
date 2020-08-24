const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {

  it("returns [9, 6] for [2, 5, 9, 6, 4, 7]", () => {
    assert.deepEqual(middle([2, 5, 9, 6, 4, 7]), [9, 6]);
  })

  it("returns 1 for [2 ,1 ,3]", () => {
    assert.deepEqual(middle([2 ,1 ,3]), 1);
  })

});