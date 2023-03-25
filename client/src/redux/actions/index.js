import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const SET_SEARCH_KEY = "SET_SEARCH_KEY";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOADING = "LOADING";
export const GET_REVIEWS = "GET_REVIEWS";
export const ADD_REVIEW = "ADD_REVIEW";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
export const GET_WATCHLIST = "GET_WATCHLIST";

export const getWatchlist = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          append_to_response: "videos",
        },
      });
      return dispatch({
        type: GET_WATCHLIST,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
}

export const removeFromWatchlist = (user, movieid, boolean) => {
  try {
    return async function (dispatch) {
      const response = await axios.put(
        `http://localhost:4005/api/user/${movieid}`,
        { boolean : false},
        { headers: { authorization: `Bearer ${user.token}` } }
      );
      console.log(response)
      return dispatch({
        type: REMOVE_FROM_WATCHLIST,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};
export const addToWatchlist = (user, movieid, boolean) => {
  try {
    return async function (dispatch) {
      const response = await axios.put(
        `http://localhost:4005/api/user/${movieid}`,
        { boolean },
        { headers: { authorization: `Bearer ${user.token}` } }
      );
      return dispatch({
        type: ADD_TO_WATCHLIST,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const getReviews = (user, movieid) => {
  try {
    return async function (dispatch) {
      const response = await axios.get(
        `http://localhost:4005/api/review/${movieid}`,
        { headers: { authorization: `Bearer ${user.token}` } }
      );
      return dispatch({
        type: GET_REVIEWS,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const addReview = (user, comment, movieid) => {
  try {
    return async function (dispatch) {
      const response = await axios.post(
        `http://localhost:4005/api/review/${movieid}`,
        { comment },
        { headers: { authorization: `Bearer ${user.token}` } }
      );
      return dispatch({
        type: ADD_REVIEW,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const register = (name, email, password) => {
  try {
    return async function (dispatch) {
      const response = await axios.post(
        "http://localhost:4005/api/auth/register",
        { name, email, password }
      );
      return dispatch({
        type: REGISTER,
        payload: response.data,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  try {
    return async function (dispatch) {
      return dispatch({
        type: LOGOUT,
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const login = (email, password) => {
  try {
    return async function (dispatch) {
      const response = await axios.post(
        "http://localhost:4005/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data) {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      } else {
        return dispatch({
          type: LOGIN_ERROR,
        });
      }
    };
  } catch (err) {
    console.log(err);
  }
};

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
        const trailer = data.videos.results.find((vid) =>
          vid.name.includes("Official Trailer")
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
