export const getFullImageFilePath = url => {
  if (url !== null) {
    const imagePath = 'https://image.tmdb.org/t/p/w300' + url;

    return imagePath;
  }

  return 'https://dummyimage.com/100x150/';
};
