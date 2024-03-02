import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper } from './AdditionalMovieInformationCard.styled';

const AdditionalMovieInformationCard = ({ previousPage }) => {
  return (
    <StyledWrapper>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link state={{ from: previousPage }} to={`cast`}>
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from: previousPage }} to={`reviews`}>
            Reviews
          </Link>
        </li>
      </ul>
    </StyledWrapper>
  );
};

export default AdditionalMovieInformationCard;
