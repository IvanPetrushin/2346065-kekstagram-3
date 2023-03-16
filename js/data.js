import { randomValue } from './util.js';

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

export {getPhotosData};
