import React from 'react';
import { Btn } from './Button.styled';

const Button = ({ onLoadMore }) => {
  return <Btn onClick={onLoadMore}>Load more</Btn>;
};

export default Button;
