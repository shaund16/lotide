const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//access star keys value
//test with the callback function
//loop through the star keys
const findKey = (object, callback) => {
  //loop through the whole objects and access the keys (eg Blue Hill, Akaleri ....)
  for (key in object) {
    
    // create a variable target and store it the star keys with the number values (eg. stars: 1)
    const target = object[key];

    //create a varaiable that store true or false access where my callback function is work the function in the second parameter below...
    const comparisonResult = callback(target);
    
    //if comparisonResult is true proceed
    if (comparisonResult) {

      //return the key looping through ( eg. Blue Hill, akaleri etc)  
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');


