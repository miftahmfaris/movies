import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Movies, Favourite } from "./pages";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact to="/">
                        <Home />
                    </Route>
                    <Route exact to="/movies">
                        <Movies />
                    </Route>
                    <Route exact to="/favourite">
                        <Favourite />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
