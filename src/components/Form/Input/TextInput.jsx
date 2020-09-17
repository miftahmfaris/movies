import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { ErrorMessage } from "formik";

export default function TextInput({ field, form, ...props }) {
    return (
        <div>
            <InputGroup size="lg" className="mb-3">
                <FormControl {...field} {...props} />
            </InputGroup>
            <ErrorMessage
                render={(msg) => (
                    <p
                        style={{
                            color: "red",
                            fontStyle: "italic",
                            margin: 0,
                            textAlign: "center",
                        }}
                    >
                        {msg}
                    </p>
                )}
                name={field.name}
            />
        </div>
    );
}
