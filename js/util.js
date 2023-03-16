function randomValue (a, b) {
  const minValue = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maxValue = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

const maxCommentLength = (lineToCheck, maxLength) => String(lineToCheck).length <= maxLength;

export {randomValue, maxCommentLength};
