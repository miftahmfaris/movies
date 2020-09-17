import { GET_MEMBER, LOGOUT } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_MEMBER:
            return { ...state };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
