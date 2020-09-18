import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    name: Yup.string()
        .required("Required")
        .min(4, "Input more character")
        .max(12, "Too many characters"),
});

export default LoginSchema;
