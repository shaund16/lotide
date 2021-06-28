const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

// TEST CASES
describe('#tail', () => {

  it('returns [Lighthouse, Labs] when putting ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('original array should still have 3 elements ["Yo Yo", "Lighthouse", "Labs"] ', () => {
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  
});







