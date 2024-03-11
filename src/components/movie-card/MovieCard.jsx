import { getFullImageFilePath } from "../../services/MoviesPostersDbApi";

import Avatar from "@/assets/images/svg/icon.svg?react";

import styles from "./MovieCard.module.css";

const MovieCard = ({
  imageUrl,
  title,
  releaseDate,
  genres,
  score,
  overview,
}) => {
  imageUrl = getFullImageFilePath(imageUrl);
  const year = releaseDate.split("-")[0];

  if (imageUrl !== undefined) {
    return (
      <div className={styles.movieCardWrapper}>
        {(imageUrl && (
          <img
            className={styles.moviePoster}
            src={imageUrl}
            alt='Movie card'
            width='270'
            height='400'
          />
        )) || (
          <Avatar
            className={styles.emptyMoviePoster}
            width='270px'
            height='400px'
            style={{
              display: "block",
              maxWidth: "100%",
            }}
          />
        )}
        <ul className={styles.movieInfoList}>
          <li style={{ marginBottom: "10px" }}>
            <div className={styles.movieInfoHeader}>
              <h1>{title + ` (${year})`}</h1>
              <span>User score: {score}%</span>
            </div>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h2 className={styles.genredListHeader}>Genres</h2>
            <ul className={styles.movieGenresList}>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
};

export default MovieCard;
