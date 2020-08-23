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
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; 
      }  
    }
    return true;
  }
}


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

console.log(middle([2, 5, 9, 6, 4, 7]));
console.log(middle([2,1,3]));