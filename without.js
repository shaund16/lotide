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

//take items to remove to then remove them to the source

const without = function(source, itemsToRemove) {
  let arrayFinal = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) { // i = 0
    for (let j = 0; j < source.length; j++) { // 2
      if (itemsToRemove[i] === arrayFinal[j]) {
        arrayFinal.splice(j, 1);
      }
    }
  }
  return arrayFinal; // [2, 3] without([1, 2, 3], [1]) === [2, 3] console.log('dog') === "dog"
};


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }
};


assertArraysEqual(without([ 1, 2, 3 ], [ 1 ]), [2, 3]); // => [2, 3]

assertArraysEqual(without([ '1', '2', '3' ], [ 1, 2, '3' ]), ["1", "2"]); // => ["1", "2"]

const words = [ 'hello', 'world', 'lighthouse' ];

without(words, [ 'lighthouse' ]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, [ 'hello', 'world', 'lighthouse' ]);



