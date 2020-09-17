import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import LoginSchema from "./validation/Login";
import TextInput from "./Input/TextInput";
import { login } from "../../redux/actions";

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div>
            <Formik
                initialValues={{ name: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    dispatch(login(values, history));
                }}
            >
                {() => (
                    <Form>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Input your name Here ..."
                            component={TextInput}
                        />
                        <Button variant="primary" block type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
