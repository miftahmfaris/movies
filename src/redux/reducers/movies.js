import { GET_MOVIES_BY_ID, GET_MOVIES } from "../actions";

const initialState = { allMovies: [], moviesByID: {} };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_MOVIES:
            return { ...state, allMovies: actions.payload };
        case GET_MOVIES_BY_ID:
            return { ...state, moviesByID: actions.payload };
        default:
            return state;
    }
};
