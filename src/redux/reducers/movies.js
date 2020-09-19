import {
    GET_MOVIES_BY_ID,
    GET_MOVIES,
    GET_FAVOURITE_MOVIES,
    LOGOUT,
    DELETE_FAVOURITE_MOVIES,
} from "../actions";

const initialState = { allMovies: [], moviesByID: {}, favouriteMovies: [] };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_MOVIES:
            const result = actions.payload.map((t1) => ({
                ...t1,
                ...state.favouriteMovies.find((t2) => t2.imdbID === t1.imdbID),
            }));

            return { ...state, allMovies: result };
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
        case DELETE_FAVOURITE_MOVIES:
            const indexFavouriteMovies = state.favouriteMovies.findIndex(
                (item) => {
                    return item.imdbID === actions.payload;
                }
            );

            state.favouriteMovies.splice(indexFavouriteMovies, 1);

            return {
                ...state,
                allMovies: [],
                favouriteMovies: state.favouriteMovies,
            };
        case LOGOUT:
            return { ...state, allMovies: [], favouriteMovies: [] };
        default:
            return state;
    }
};
