import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PreviewMovieCard.module.css";

import { getFullImageFilePath } from "services/MoviesPostersDbApi";

import Avatar from "@/assets/images/svg/icon.svg?react";

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
      {(imageUrl && (
        <img src={imageUrl} alt={title} width='200' height='300' />
      )) || (
        <Avatar
          width='200px'
          height='300px'
          style={{ display: "block", maxWidth: "100%" }}
        />
      )}
      <div className={styles.movieInfoWrapper}>
        <h3 className={styles.cardTitle}>
          {title} ({year})
        </h3>
      </div>
    </NavLink>
  );
};

export default PreviewMovieCard;
