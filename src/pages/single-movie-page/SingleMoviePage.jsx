import AdditionalMovieInformationCard from "../../components/additional-movie-information-card/AdditionalMovieInformationCard";
import MovieCard from "../../components/movie-card/MovieCard";
import { Loader } from "../../components/shared/loader/Loader";
import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../services/MoviesDbApi";

import styles from "./SingleMoviePage.module.css";

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const previousPage = useRef(location.state?.from || "/");

  useEffect(() => {
    (async () => {
      const response = await getMovieById(movieId);
      setMovie(response);
    })();
  }, [movieId]);

  const countScoreInPercents = score => {
    return (score * 10).toFixed(2);
  };

  if (movie) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bigScreenContainer}>
            <NavLink className={styles.backButton} to={previousPage.current}>
              ← Go back
            </NavLink>
            <MovieCard
              imageUrl={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              genres={movie.genres}
              score={countScoreInPercents(movie.vote_average)}
              overview={movie.overview}
            />
            <AdditionalMovieInformationCard
              previousPage={previousPage.current}
            />
          </div>
          <Suspense fallback={<Loader />}>
            <div className={styles.additionalMovieInfoWrapper}>
              <Outlet />
            </div>
          </Suspense>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Loader />
      </div>
    </section>
  );
};

export default SingleMoviePage;
