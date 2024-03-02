import ActorCard from 'components/actor-card/ActorCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/MoviesDbApi';
import { StyledList, StyledWrapper } from './MovieCast.styled';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getMovieCast(movieId);
      setCast(response.cast);
    })();
  }, [movieId]);

  return (
    <StyledWrapper>
      <StyledList>
        {cast.map(actor => (
          <li key={actor.id}>
            <ActorCard
              name={actor.name}
              imageUrl={actor.profile_path}
              character={actor.character}
            />
          </li>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default MovieCast;
