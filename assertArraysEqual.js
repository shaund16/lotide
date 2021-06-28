const eqArrays = require('./eqArrays');

//make a new function where it is using the eqArray functions code inside to double check that both arr1 and arr2 are equal. with new parameters in the new functions

const assertArraysEqual = (array1, array2) => {
  //using and calling the eqArray function testing that both arrays are equal will return a new result
  if (eqArrays(array1, array2)) {
    //if both arrays are equal install this to the console
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }
};

module.exports = assertArraysEqual;






