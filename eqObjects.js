const assertEqual = function(actual, expected) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  if (actual === expected) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${actual} !==  ${expected}`);
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
};


const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length != obj2.length) {
      return false;
  } else {

  for (let name of obj1) {
    // let name = obj1[i];
    if (obj1[name] === obj2[name]) {
        return true;
    } else {
      return false;
    }
  }
  return true;
}
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
// console.log(assertEqual(ab, ba));

const aa = { a: "1", b: "2" };
const bb = { a: "1", b: "2" };
// console.log(assertEqual(aa, bb));
console.log(eqObjects(aa, bb)); // => true


// Outputs: true
// console.log(isEquivalent(ab, ba));


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
// console.log(assertEqual(ab, abc));

// Outputs: true
// console.log(isEquivalent(ab, abc));


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
console.log(eqArrays(cd, dc));

// Outputs: true
// console.log(isEquivalent(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
// console.log(eqArrays(cd, cd2));

// Outputs: true
// console.log(isEquivalent(cd, cd2));