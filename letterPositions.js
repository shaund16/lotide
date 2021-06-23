//EQ ARRAYS FUNCTION

const eqArrays = (arr1, arr2) => {
  if ((Array.isArray(arr1) && Array.isArray(arr2)) && (arr1.length !== arr2.length)) {
    return false;
  }
  for (let i = 0; i < arr1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


//ASSERT ARRAY EQUALS FUNCTION

const assertArrayEquals = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log('They are equal');
  } else {
    console.log('They are not equal');
  }

};





// Count Letters function

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
 
    //if sentence i doesn not equal white space enter in condition. If there is a white space then continue with another loop.
 
    if (sentence[i] !== ' ') {
  
      //if results sentence i equals undefined which it is because results has no key defined then continue
  
      if (results[sentence[i]] === undefined) {
  
        // store the key value which is results sentence i ( the letter ) and store its value to the index of that key value
  
        results[sentence[i]] = [i];
  
        //if the key: "value" has a stored value already then continue through the else statement
      } else {

        //here is where the next index will be pushed into the key value with the current index. (multiple letters)
        results[sentence[i]].push(i);
      }
    }
   
  }
  return results;
};



// console.log(letterPositions('lighthouse in the house'))
console.log(letterPositions('hello'));
// assertArrayEquals(letterPositions('hello').e, [1])
assertArrayEquals(letterPositions('lighthouse in the house'));