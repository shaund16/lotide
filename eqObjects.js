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

module.exports = eqObjects;
