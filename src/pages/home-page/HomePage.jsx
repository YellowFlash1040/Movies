import MoviesList from "../../components/movies-list/MoviesList";
import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/MoviesDbApi";

import styles from "./HomePage.module.css";

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
    <section className={styles.section}>
      <h1 className={styles.sectionHeader}>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </section>
  );
};

export default HomePage;
