const eqArrays = require('../eqArrays');
const assertArrayEqual = require('../assertArrayEqual');


assertArrayEqual([1, 2, 3], [1, 5, 6]); // => false
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true