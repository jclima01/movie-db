// Importa las action types acá

import {
  GET_MOVIES,
  GET_MOVIE,
  SET_SEARCH_KEY,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  REGISTER_START,
  REGISTER,
  LOADING,
  ADD_REVIEW,
  GET_REVIEWS,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  GET_GENRES
} from "../actions";

const initialState = {
  movies: [],
  movie: {},
  trailer: {},
  searchKey: "",
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: false,
  reviews: [],
  genres:[]
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Acá va tu código:
    case REMOVE_FROM_WATCHLIST:
    case ADD_TO_WATCHLIST:
      localStorage.setItem("user", JSON.stringify(payload));
      return{
        ...state,
        user: {...state.user.token,...payload},
      }

    case GET_REVIEWS:
      return{
        ...state,
        reviews: [...payload]
      }
    case ADD_REVIEW:
    case REGISTER:
      return{
        ...state,
      }
    case LOADING:
      return{
        ...state,
        loading: payload
      }
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
    case GET_GENRES:
      return {
        ...state,
        genres: [...payload]
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
