import React from 'react';
import { StyledText } from './ReviewCard.styled';

const ReviewCard = ({ authorName, content }) => {
  const htmlText = { __html: content };
  return (
    <>
      <StyledText>Author: {authorName}</StyledText>
      <p dangerouslySetInnerHTML={htmlText}></p>
    </>
  );
};

export default ReviewCard;
