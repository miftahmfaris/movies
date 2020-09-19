import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import TextInput from "./Input/TextInput";
import { search } from "../../redux/actions";

export default function Search(props) {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                s: "",
            }}
            onSubmit={(values) => {
                dispatch(search(values.s));
            }}
        >
            {({ values }) => (
                <Form>
                    <Field
                        name="s"
                        placeholder="Search here"
                        component={TextInput}
                    />
                    <Button variant="primary" block type="submit">
                        Search
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
