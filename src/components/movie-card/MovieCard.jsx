import { getFullImageFilePath } from "../../services/MoviesPostersDbApi";
import { StyledCardWrapper, StyledList } from "./MovieCard.styled";

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
      <StyledCardWrapper>
        <img
          className={styles.moviePoster}
          src={imageUrl}
          alt='Movie card'
          width='200'
          height='300'
        />
        <ul className={styles.movieInfoList}>
          <li style={{ marginBottom: "10px" }}>
            <h1>{title + ` (${year})`}</h1>
            <p>User score: {score}%</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h2>Genres</h2>
            <StyledList>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </StyledList>
          </li>
        </ul>
      </StyledCardWrapper>
    );
  }
};

export default MovieCard;
