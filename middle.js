// TEST/ASSERTION FUNCTIONS

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


const assertArrayEquals = (array1, array2) => {
 
  if (eqArrays(array1, array2)) {

    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }

};




//MIDDLE FUNCTION

//find the length of array and divide it by 2
//round up whole number
// return that value
const middle = (middle) => {
  let finalArray = [];
  let divideIndex = middle.length / 2;
  if (middle.length % 2 === 0 && middle.length > 3) {
    const first = divideIndex;
    finalArray.push(middle[first - 1], middle[first]);
  } else if (middle.length > 2) {
    const index = Math.ceil(divideIndex);
    finalArray.push(middle[index - 1]);
  }
  return finalArray;
};

assertArrayEquals(middle([1]), []); // => []
assertArrayEquals(middle([1, 2]), []); // => []

assertArrayEquals(middle([1, 2, 3]), [2]); // => [2]
assertArrayEquals(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArrayEquals(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]

