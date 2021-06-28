// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = (sentence) => {

  //make empty object

  const finalSentence = {};

  //loop through sentence and loop through single letters
  for (const letter of sentence) {

    //make if statement to check if letter is not equal to space then continue loop. If letter is space continue the loop
    if (letter !== ' ') {

      //then if finalSentence single letter add one to that key value
      if (finalSentence[letter]) {
        finalSentence[letter] += 1;

        //if there is not another value to key then just keep it at one
      } else {
        finalSentence[letter] = 1;
      }
    }
  }
  return finalSentence;
};

module.exports = countLetters;

console.log(countLetters('lighthouse in the house'));
/*

countLetters('lighthouse in the house')
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

*/