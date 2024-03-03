import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./MoviesList.module.css";

import PreviewMovieCard from "../preview-movie-card/PreviewMovieCard";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.moviesList}>
      {movies?.map(movie => (
        <li key={movie.id}>
          <PreviewMovieCard
            id={movie.id}
            imageUrl={movie.poster_path}
            title={movie.title}
            releaseDate={movie.release_date}
            fromLocation={location}
          />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
