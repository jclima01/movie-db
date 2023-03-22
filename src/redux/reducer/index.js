// Importa las action types acá

import { GET_MOVIES, GET_MOVIE } from "../actions";

const initialState = {
  movies: [],
  movie: {},
  trailer: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Acá va tu código:
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
