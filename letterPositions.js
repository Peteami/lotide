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
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};



const letterPositions = function(string) {
  const results = {};
  const sentence = string.split('');
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter] === undefined) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};

const result1 = letterPositions("party of fivep pillf");
console.log(result1);