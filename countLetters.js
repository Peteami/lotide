const assertEqual = function(actual, expected) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  if (actual === expected) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const countLetters = function(string) {
  const objCounter = {};
  const sentence1 = string.replace(/\s+/g, '');
  console.log(sentence1);
  const sentence = sentence1.split('');
  // console.log(sentence);
  for (let name of sentence) {
    if (objCounter[name] === undefined) {
      objCounter[name] = 1;
    } else {
      objCounter[name]++;
    }
  }
  return objCounter;
};

const result1 = countLetters("Lighthouse in the house");
console.log(result1);

assertEqual(result1["i"], 2);
assertEqual(result1["t"], 3);