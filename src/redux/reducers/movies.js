import {
    GET_MOVIES_BY_ID,
    GET_MOVIES,
    GET_FAVOURITE_MOVIES,
    LOGOUT,
} from "../actions";

const initialState = { allMovies: [], moviesByID: {}, favouriteMovies: [] };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_MOVIES:
            return { ...state, allMovies: actions.payload };
        case GET_MOVIES_BY_ID:
            return { ...state, moviesByID: actions.payload };
        case GET_FAVOURITE_MOVIES:
            const listMovies = state.allMovies;
            const index = state.allMovies.findIndex((item) => {
                return item.imdbID === actions.payload;
            });
            listMovies[index].favourite = true;

            return {
                ...state,
                allMovies: listMovies,
                favouriteMovies: [...state.favouriteMovies, listMovies[index]],
            };
        case LOGOUT:
            return { ...state, allMovies: [], favouriteMovies: [] };
        default:
            return state;
    }
};
