import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import TextInput from "./Input/TextInput";
import { search } from "../../redux/actions";
import SearchSchema from "./validation/Search";

export default function Search(props) {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                s: "",
            }}
            validationSchema={SearchSchema}
            onSubmit={(values) => {
                dispatch(search(values.s));
            }}
        >
            {() => (
                <Form>
                    <div style={{ display: "flex" }}>
                        <Field
                            name="s"
                            placeholder="Search here"
                            component={TextInput}
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            style={{
                                height: "47px",
                                width: "100px",
                                marginLeft: "10px",
                            }}
                        >
                            Search
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
