const eqArrays = require('./eqArrays');


const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  else if (arr.length % 2 !== 0) {
    const result1 = Math.floor(arr.length / 2);
    return arr[result1];
  }
  const result1 = Math.floor(arr.length /2) - 1;
  const result2 = result1 + 1;
  return [arr[result1], arr[result2]];
};



module.exports = middle;