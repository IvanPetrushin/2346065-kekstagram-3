/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

function randomValue (a, b) {
  const minValue = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maxValue = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

const maxCommentLength = (lineToCheck, maxLength) => String(lineToCheck).length <= maxLength;

function getPhotosData() {
  const photos = [];
  for (let i = 0; i < 25; i ++) {
    const photoData = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Фотокарточка c id = ${i + 1}`,
      likes: randomValue(15, 200),
      comments: randomValue(0, 200)
    };
    photos.push(photoData);
  }
  return photos;
}
