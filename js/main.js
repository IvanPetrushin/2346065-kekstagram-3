/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

function randomValue (a, b) {
  const minValue = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maxValue = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  let coefficient = Math.random();

  while (coefficient === 0) {
    coefficient = Math.random();
  }

  return Math.floor(coefficient * (maxValue - minValue + 1)) + minValue;
}

const maxCommntLenght = (lineToCheck, maxLength) => String(lineToCheck).length <= maxLength;
