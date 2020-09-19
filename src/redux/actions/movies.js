import Swal from "sweetalert2";

const GET_MOVIES = "GET_MOVIES";
const GET_MOVIES_BY_ID = "GET_MOVIES_BY_ID";
const GET_FAVOURITE_MOVIES = "GET_FAVOURITE_MOVIES";
const DELETE_FAVOURITE_MOVIES = "DELETE_FAVOURITE_MOVIES";

const search = (search) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_OMDB_API}&s=${search}`;
        const options = {
            method: "GET",
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_MOVIES, payload: result.Search });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const favourite = (id, history) => async (dispatch) => {
    try {
        dispatch({ type: GET_FAVOURITE_MOVIES, payload: id });

        history.push("/favourite");
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

const unFavourite = (id, history, path) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_FAVOURITE_MOVIES, payload: id });

        path === "movies"
            ? history.push("/favourite")
            : history.push("/movies");
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

export {
    GET_MOVIES,
    GET_MOVIES_BY_ID,
    GET_FAVOURITE_MOVIES,
    DELETE_FAVOURITE_MOVIES,
    search,
    favourite,
    unFavourite,
};
