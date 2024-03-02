import MoviesList from 'components/movies-list/MoviesList';
import SearchForm from 'components/search-form/SearchForm';
import { Loader } from 'components/shared/loader/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/MoviesDbApi';
import { StyledWrapper } from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMovies([]);
    setIsLoading(true);
    (async () => {
      try {
        const { results } = await getMoviesByQuery(searchParams.get('query'));
        setMovies(results);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchParams]);

  const handleChangeSearchParams = query => {
    if (query !== searchParams.get('query')) {
      setSearchParams(query ? { query } : {});
    }
  };

  return (
    <StyledWrapper>
      <SearchForm submit={handleChangeSearchParams} />
      {(!isLoading && <MoviesList movies={movies} />) || <Loader />}
    </StyledWrapper>
  );
};

export default MoviesPage;
