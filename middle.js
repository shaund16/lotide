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

module.exports = middle;


