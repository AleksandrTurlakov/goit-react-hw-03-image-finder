import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrap, ImageGalleryCard } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryWrap>
      {items.map(item => (
        <ImageGalleryCard key={item.id} id={item.id}>
          <ImageGalleryItem item={item} />
        </ImageGalleryCard>
      ))}
    </ImageGalleryWrap>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
