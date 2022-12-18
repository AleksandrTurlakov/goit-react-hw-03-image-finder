import React from 'react';

export const ImageGalleryItem = ({ item }) => {
  return (
    <div>
      <img src={item.webformatURL} alt={item.tags} />
    </div>
  );
};
