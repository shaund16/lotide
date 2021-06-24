const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const eqObjects = function(object1, object2) {
  //make a variable for object 1 and object to store the keys in the object (eg. a: b:)

  const Obj1 = Object.keys(object1);
  const Obj2 = Object.keys(object2);
  
  //if Object 1 length is not equal to Object 2 length then return false
  if (Obj1.length !== Obj2.length) {
    return false;
  }
  
  //loop the keys in Objects and store to key1
  for (const key1 of Obj1) {
  //check and see if the value in object 1 is not equal to the value in object2 then return false.
    if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  //if values in both objects are equal return true
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqArrays(eqObjects(cd, dc)), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false