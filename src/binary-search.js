'use strict';

const binarySearch = (sortedArray, itemToFind) => {
  let lowIndex = 0;
  let highIndex = sortedArray.length - 1;

  let steps = 0;

  while (lowIndex <= highIndex) {
    steps +=
    console.log(`Number of steps so far : ${steps}`);

    const middleIndex = Math.floor((lowIndex + highIndex) / 2);
    const elementFound = sortedArray[middleIndex];

    if (elementFound < itemToFind) {
      lowIndex = middleIndex + 1;
    } else if (elementFound > itemToFind) {
      highIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 100, 150, 200, 300, 500], 28));
