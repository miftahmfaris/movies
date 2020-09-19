import Swal from "sweetalert2";

const GET_MOVIES = "GET_MOVIES";
const GET_MOVIES_BY_ID = "GET_MOVIES_BY_ID";

const search = (search) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_OMDB_API}&s=${search}`;
        const options = {
            method: "GET",
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch({ type: GET_MOVIES, payload: result.data });
    } catch (error) {
        Swal.fire({
            title: "Something Error",
            text: "Contact Admin",
            icon: "error",
        });
    }
};

export { GET_MOVIES, GET_MOVIES_BY_ID, search };
