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
}




const assertArrayEqual = function(array1, array2) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  let isEqual = eqArrays(array1, array2)
  if (isEqual === true) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${array1} !==  ${array2}`);
  }  
};



assertArrayEqual([1, 2, 3], [1, 5, 6]) // => false
assertArrayEqual([1, 2, 3], [1, 2, 3]) // => true