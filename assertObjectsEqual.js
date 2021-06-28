const eqObjects = require('./eqObjects');
// const eqObjects = function(object1, object2) {
//   //make a variable for object 1 and object to store the keys in the object (eg. a: b:)

//   const Obj1 = Object.keys(object1);
//   const Obj2 = Object.keys(object2);
  
//   //if Object 1 length is not equal to Object 2 length then return false
//   if (Obj1.length !== Obj2.length) {
//     return false;
//   }
  
//   //loop the keys in Objects and store to key1
//   for (const key1 of Obj1) {
//   //check and see if the value in object 1 is not equal to the value in object2 then return false.
//     if (object1[key1] !== object2[key1]) {
//       return false;
//     }
//   }
//   //if values in both objects are equal return true
//   return true;
// };


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(object1, object2)) {
  
    //inspect in the console log show the object printed out
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });