import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";

import "../shared/css/index.css";

const HomePage = lazy(() => import("../pages/home-page/HomePage"));
const MoviesPage = lazy(() => import("../pages/movies-page/MoviesPage"));
const SingleMoviePage = lazy(() =>
  import("../pages/single-movie-page/SingleMoviePage"),
);

const MovieCast = lazy(() => import("../components/movie-cast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/movie-reviews/MovieReviews"),
);

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='movies/:movieId' element={<SingleMoviePage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
