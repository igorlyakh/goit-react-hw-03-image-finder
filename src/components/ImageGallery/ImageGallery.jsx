import React from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ data }) => {
  return (
    <Gallery>
      {data.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            photo={item.previewURL}
            alt={item.tags}
          />
        );
      })}
    </Gallery>
  );
};

export default ImageGallery;
