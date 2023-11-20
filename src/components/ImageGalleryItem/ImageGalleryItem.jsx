import React from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ photo, alt }) => {
  return (
    <Item>
      <Image src={photo} alt={alt} />
    </Item>
  );
};

export default ImageGalleryItem;
