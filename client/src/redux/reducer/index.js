// Importa las action types acá

import { GET_MOVIES, GET_MOVIE, SET_SEARCH_KEY } from "../actions";

const initialState = {
  movies: [],
  movie: {},
  trailer: {},
  searchKey: ""
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Acá va tu código:
    case SET_SEARCH_KEY:
      return{
        ...state,
        searchKey: payload
      }
    case GET_MOVIES:
      return {
        ...state,
        movies: [...payload],
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: {...payload.data},
        trailer: {...payload.trailer}
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
