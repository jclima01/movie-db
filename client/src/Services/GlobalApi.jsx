import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const DB_URL = import.meta.env.VITE_DB_URL;

const movieByGenreBaseURL = API_URL + "/discover/movie?api_key=" + API_KEY;

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = axios.get(
  API_URL + "/trending/all/day?api_key=" + API_KEY
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
