const assertEqual = function(actual, expected) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  if (actual === expected) {
    console.log(`${yes} ${yes} ${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no} ${no} ${no} Assertion Failed: ${actual} !==  ${expected}`);
  }
};



const countOnly = function(allItems, itemsToCount) {
  const objCounter = {};
  for (let name of allItems) {
    if (itemsToCount[name]) {
      if (!objCounter[name]) {
        objCounter[name] = 1;
      } else {
        objCounter[name]++;
      }
    }

  }
  return objCounter;
};
  

const firstName = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
const result1 = countOnly(firstName, {"Jason": true, "Karima": true, "Fang": true});
console.log(result1);
  
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

