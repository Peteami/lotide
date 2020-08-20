const assertEqual = function(actual, expected) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  if (actual === expected) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${actual} !==  ${expected}`);
  }
};



const findKeyByValue = function(database, selection) {
  return Object.keys(database).find(key => database[key] === selection);
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};




console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");