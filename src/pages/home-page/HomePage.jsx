import MoviesList from 'components/movies-list/MoviesList';
import { StyledSection } from 'components/shared/StyledComponents';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/MoviesDbApi';
import { StyledH1 } from './HomePage.styled';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { results: movies } = await getTrendingMovies();
        movies?.length ? setTrendingMovies(movies) : setTrendingMovies([]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <StyledSection>
      <StyledH1>Trending today</StyledH1>
      <MoviesList movies={trendingMovies} />
    </StyledSection>
  );
};

export default HomePage;
