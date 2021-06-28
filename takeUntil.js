///////EQ Arrays /////////

const eqArrays = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

/////Take UNTIL FUNCTIONNN //////////

const takeUntil = function(array, callback) {
  //make a vairable that stores the index that is the callback.
  const end = array.findIndex(callback);
  return array.splice(0, end);
};



/////////ASSERT ARRAY EQUALS ///////////

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }
};

const data1 = [ 1, 2, 5, 7, 2, -1, 2, 4, 5 ];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log('---');

const data2 = [ "I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood' ];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(results2);

console.log('---');
