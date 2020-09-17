import Swal from "sweetalert2";

const GET_MEMBER = "GET_MEMBER";
const LOGOUT = "LOGOUT";

const login = (values, history) => async (dispatch) => {
    try {
        Swal.fire({
            title: "Thank You for Coming",
            text: "Please Enjoy",
            icon: "success",
        });
        localStorage.setItem("token", true);
        history.push("/movies");

        dispatch({ type: GET_MEMBER, payload: values });
    } catch (error) {
        console.log(error);
    }
};

export { GET_MEMBER, LOGOUT, login };
