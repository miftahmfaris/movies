import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const members = useSelector((state) => state.members);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                members.name !== undefined ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
