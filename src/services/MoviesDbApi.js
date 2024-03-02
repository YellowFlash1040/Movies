import axios from 'axios';

const authorizationKey =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGI2N2ZiMDFkY2MxYmI3NDc3MmU2ZDZjMDA4OTVmMCIsInN1YiI6IjY1YWQxNzAzMDljMjRjMDBhZDAxMTA1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VPrdljB02gZAQ9gVUbKfZpbP1pgJVVFSxVtc6hFH9Mg';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = authorizationKey;

export const getTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day?language=en-US');

  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(`movie/${id}`);

  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits`);

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`);

  return response.data;
};

export const getMoviesByQuery = async query => {
  const response = await axios.get('search/movie', {
    params: {
      query,
    },
  });

  return response.data;
};
