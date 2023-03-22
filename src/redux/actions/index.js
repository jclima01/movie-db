import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const SET_SEARCH_KEY = "SET_SEARCH_KEY";

export const setSearchKey = (value) => {
  try {
    return async function (dispatch) {
      return dispatch({
        type: SET_SEARCH_KEY,
        payload: value,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getMovies = (searchKey) => {
  try {
    return async function (dispatch) {
      const type = searchKey ? "search" : "discover";
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });
      return dispatch({
        type: GET_MOVIES,
        payload: results,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const getMovie = (id) => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          append_to_response: "videos",
        },
      });
      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );

        return dispatch({
          type: GET_MOVIE,
          payload: {
            data: data,
            trailer: trailer ? trailer : data.videos.results[0],
          },
        });
      }
    };
  } catch (err) {
    console.log(err);
  }
};
