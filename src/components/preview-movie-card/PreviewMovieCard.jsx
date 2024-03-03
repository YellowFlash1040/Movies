import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PreviewMovieCard.module.css";

import { getFullImageFilePath } from "services/MoviesPostersDbApi";

const PreviewMovieCard = ({
  id,
  imageUrl,
  title,
  releaseDate,
  fromLocation,
}) => {
  imageUrl = getFullImageFilePath(imageUrl);
  const year = releaseDate.split("-")[0];

  return (
    <NavLink
      className={styles.moviePageUrl}
      state={{ from: fromLocation }}
      to={`/movies/${id}`}
    >
      <div className={styles.card}>
        <img src={imageUrl} alt={title} width='220' height='360' />
        <div className={styles.movieInfoWrapper}>
          <h3 className={styles.cardTitle}>
            {title} ({year})
          </h3>
        </div>
      </div>
    </NavLink>
  );
};

export default PreviewMovieCard;
