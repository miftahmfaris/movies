import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
});

export default LoginSchema;
