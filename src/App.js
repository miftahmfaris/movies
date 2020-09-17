import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./helpers/PrivateRoute";
import { Home, Movies, Favourite, DetailMovie } from "./pages";
import { Navbar } from "./components";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <PrivateRoute exact path="/movies">
                        <Movies />
                    </PrivateRoute>
                    <PrivateRoute exact path="/movies/:id">
                        <DetailMovie />
                    </PrivateRoute>
                    <PrivateRoute exact path="/favourite">
                        <Favourite />
                    </PrivateRoute>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
