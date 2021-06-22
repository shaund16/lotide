// FUNCTION IMPLEMENTATION

//check every single number on both arr 1 and 2
// check and see if each individual letter is equal to true

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
