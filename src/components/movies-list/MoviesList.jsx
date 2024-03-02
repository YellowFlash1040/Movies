import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies?.map(movie => (
        <li key={movie.id}>
          <NavLink state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
