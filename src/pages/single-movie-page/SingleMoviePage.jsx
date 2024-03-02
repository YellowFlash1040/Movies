import AdditionalMovieInformationCard from "../../components/additional-movie-information-card/AdditionalMovieInformationCard";
import MovieCard from "../../components/movie-card/MovieCard";
import { Loader } from "../../components/shared/loader/Loader";
import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../services/MoviesDbApi";
import { StyledLink, StyledSection } from "./SingleMoviePage.styled";

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
      <StyledSection>
        <StyledLink to={previousPage.current}>← Go back</StyledLink>
        <MovieCard
          imageUrl={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release_date}
          genres={movie.genres}
          score={countScoreInPercents(movie.vote_average)}
          overview={movie.overview}
        />
        <AdditionalMovieInformationCard previousPage={previousPage.current} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledSection>
    );
  }
};

export default SingleMoviePage;
