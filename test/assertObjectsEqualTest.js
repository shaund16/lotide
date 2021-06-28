const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');

//TEST CODE
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });