const eqArrays = (arr1, arr2) => {
  if ((Array.isArray(arr1) && Array.isArray(arr2)) && (arr1.length !== arr2.length)) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const flatten = (array) => {
  let finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        finalArray.push(array[i][j]);
      }
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
};



// assertArrayEquals((flatten([1,2,[3,4],5,[6]]), [1,2,3,4,5,6])); //[ 1, 2, 3, 5, 6 ]);


const assertArrayEquals = (array1, array2) => {

  //using and calling the eqArray function testing that both arrays are equal will return a new result
  if (eqArrays(array1, array2)) {
  
    //if both arrays are equal install this to the console
    
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }

};

assertArrayEquals(flatten([1,2,[3,4],5,[6]], [1,2,3,4,5,6]));
// eqArrays((flatten([1,2,3,4,5,6]), [1,2,3,4,5,6]), [ 1, 2, 3, 5, 6 ]);