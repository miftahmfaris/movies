import Swal from "sweetalert2";

const GET_MEMBER = "GET_MEMBER";
const LOGOUT = "LOGOUT";

const login = (values, history) => async (dispatch) => {
    try {
        Swal.fire({
            title: "Welcome",
            text: "Please Enjoy",
            icon: "success",
        });

        dispatch({ type: GET_MEMBER, payload: values });

        history.push("/movies");
    } catch (error) {
        console.log(error);
    }
};

const logout = (history) => async (dispatch) => {
    try {
        Swal.fire({
            title: "Thank You for Coming",
            icon: "success",
        });

        dispatch({ type: LOGOUT });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};

export { GET_MEMBER, LOGOUT, login, logout };
