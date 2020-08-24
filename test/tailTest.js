const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe("#tail", () => {

  it("returns [9, 6] for [2, 5, 9, 6, 4, 7]", () => {
    assert.deepEqual(tail([2, 5, 9, 6, 4, 7]), [9, 6]);
  })

  it("returns 1 for [2 ,1 ,3]", () => {
    assert.deepEqual(tail([2 ,1 ,3]), 1);
  })

});

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 2); // original array should still have 3 elements!

