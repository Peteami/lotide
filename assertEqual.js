const assertEqual = function(actual, expected) {
  const no = String.fromCodePoint(0x1f631);
  const yes = String.fromCodePoint(0x1f44b);
  if (actual === expected) {
    console.log(yes + yes + yes + " Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(no + no + no + " Assertion Failed: " + actual + " !== " + expected);
  }
    
};



// TEST CODE

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

