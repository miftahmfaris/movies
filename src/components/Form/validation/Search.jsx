import * as Yup from "yup";

const SearchSchema = Yup.object().shape({
    s: Yup.string().required("Required"),
});

export default SearchSchema;
