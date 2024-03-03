import MoviesList from "components/movies-list/MoviesList";
import SearchForm from "components/search-form/SearchForm";
import { Loader } from "components/shared/loader/Loader";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "services/MoviesDbApi";

import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query");
    setMovies([]);

    if (query) {
      setIsLoading(true);
      (async () => {
        try {
          const { results } = await getMoviesByQuery(query);
          setMovies(results);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [searchParams]);

  const handleChangeSearchParams = query => {
    if (query !== searchParams.get("query")) {
      setSearchParams(query ? { query } : {});
    }
  };

  return (
    <section className={styles.section}>
      <SearchForm submit={handleChangeSearchParams} />
      {(!isLoading && <MoviesList movies={movies} />) || <Loader />}
    </section>
  );
};

export default MoviesPage;
