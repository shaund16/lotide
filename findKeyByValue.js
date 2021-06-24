// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//collection is the key , nameMovie is "The Wire and That 70 Show"
const findKeyByValue = (collection, nameMovie) => {
  //make a variable and store the keys in the bestTvShowByGenre
  const collectionList = Object.keys(collection);
  //loop through the collecitonList(keys) and store in variable category
  for (const category of collectionList) {
  //check if the key: "value" is equal to the nameMovie if it is return the key eg...drama
    if (collection[category] === nameMovie) {
      return category;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
