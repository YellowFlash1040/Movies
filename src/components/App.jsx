import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";

import "../shared/css/index.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const HomePage = lazy(() =>
  import("../pages/home-page/HomePage").catch(() => {
    toast.error("Network error");
    return {
      default: () => <></>,
    };
  }),
);
const MoviesPage = lazy(() =>
  import("../pages/movies-page/MoviesPage").catch(() => {
    toast.error("Network error");
    return {
      default: () => <></>,
    };
  }),
);
const SingleMoviePage = lazy(() =>
  import("../pages/single-movie-page/SingleMoviePage").catch(() => {
    toast.error("Network error");
    return {
      default: () => <></>,
    };
  }),
);

const MovieCast = lazy(() =>
  import("../components/movie-cast/MovieCast").catch(() => {
    toast.error("Network error");
    return {
      default: () => <></>,
    };
  }),
);
const MovieReviews = lazy(() =>
  import("../components/movie-reviews/MovieReviews").catch(() => {
    toast.error("Network error");
    return {
      default: () => <></>,
    };
  }),
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
