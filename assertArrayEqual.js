const eqArrays = require('./eqArrays');



const assertArrayEqual = function(array1, array2) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  let isEqual = eqArrays(array1, array2);
  if (isEqual === true) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${array1} !==  ${array2}`);
  }
};

module.exports = assertArrayEqual;