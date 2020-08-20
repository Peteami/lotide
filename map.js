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

const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const firstLetter = function(arg1) {
  return arg1[0];
};


// console.log(map(words, firstLetter));
// console.log(map(words, (x) => { return x[0]; }));
console.log(map(words, x => x[0]));


assertArrayEqual(map(words, firstLetter), [ 'g', 'c', 't', 'm', 't' ]);

