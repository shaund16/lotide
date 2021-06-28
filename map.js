////////////// EQ ARRAYS FUNCTION //////////////////////////////////


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




////////////// MAP FUNCTION /////////

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];
const testScores = [70, 80, 100];


const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};






///////////ASSET ARRAY EQUALS FUNCTION ////////////////

const assertArraysEqual = (array1, array2) => {

  if (eqArrays(array1, array2)) {
  
    
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }

};




assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], map(words, word => word[0]));
assertArraysEqual([ 'r', 'o', 'o', 'a', 'o' ], map(words, word => word[1]));
assertArraysEqual([2, 4, 6, 8, 10, 12], map(numbers, number => number * 2));
assertArraysEqual([72, 82, 102], map(testScores, score => score + 2));
