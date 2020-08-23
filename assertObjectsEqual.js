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


const assertObjectsEqual = function(actual, expected) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  let isEqual = eqObjects(actual, expected);
  if (isEqual === true) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${actual} !==  ${expected}`);
  }
    
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


const aa = { a: "1", b: "2" };
const bb = { a: "1", b: "2" };
assertObjectsEqual(aa, bb); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true