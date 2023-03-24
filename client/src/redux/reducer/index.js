// Importa las action types acá

import {
  GET_MOVIES,
  GET_MOVIE,
  SET_SEARCH_KEY,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "../actions";

const initialState = {
  movies: [],
  movie: {},
  trailer: {},
  searchKey: "",
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Acá va tu código:
    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user")) || null,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        user: payload,
      };
    case LOGIN_ERROR:
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
      };
    case SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: payload,
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: [...payload],
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: { ...payload.data },
        trailer: { ...payload.trailer },
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
