//using existing function to check that the arrays are equal.

const eqArrays = (arr1, arr2) => {

  //make an if statement to check that arr1 and arr2 is an array. AND that they have the same length. IF NOT STOP function

  if ((Array.isArray(arr1) && Array.isArray(arr2)) && (arr1.length !== arr2.length)) {
    return false;
  }

  //loop through arrays and if arr1 is not equal to arr2 return false and stop the function.

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  //if they are equal return true

  return true;
};


//make a new function where it is using the eqArray functions code inside to double check that both arr1 and arr2 are equal. with new parameters in the new functions

const assertArrayEquals = (array1, array2) => {

  //using and calling the eqArray function testing that both arrays are equal will return a new result
  if (eqArrays(array1, array2)) {
  
    //if both arrays are equal install this to the console
    
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }

};

assertArrayEquals([1,2,3], [1,2,3]);




