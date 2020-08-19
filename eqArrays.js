const assertEqual = function(actual, expected) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  if (actual === expected) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${actual} !==  ${expected}`);
  }
    
};



// const eqArrays = function(array1, array2) {
//   if (JSON.stringify(array1) === JSON.stringify(array2)) {
//     return true;
//   } else {
//     return false;
//   }

// }

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 77]), false) // => false


assertEqual(eqArrays(["1", "2"], ["1", "2", "3"]), false) 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false) 
