const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        // console.log(array1 + array2 + "false");
        return false;
      }
    }
    return true;
  }
};



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


const without = function(array, removeItem) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let insert = true;
    for (let j = 0; j < removeItem.length; j++) {
      if (array[i] === removeItem[j]) {
        insert = false;
      }
    }
    if (insert === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1, 2]));
let result = without([1, 2, 3], [1]);
console.log(result);
assertArrayEqual(result, [2, 3]);


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
