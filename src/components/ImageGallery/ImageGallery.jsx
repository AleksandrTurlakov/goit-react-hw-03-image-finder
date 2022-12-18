import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <li key={item.id} id={item.id}>
          <ImageGalleryItem item={item} />
        </li>
      ))}
    </>
  );
};
