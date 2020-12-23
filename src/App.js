import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// Importing auth components
import CheckIfLoggedIn from "./CheckIfLoggedIn";
import CheckIfAccountVerified from "./CheckIfAccountVerified";

// Importing all pages
import Index from "./pages/Index";
import VerifyAccount from "./pages/VerifyAccount";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";

export default class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <Switch>
            <CheckIfLoggedIn exact path="/" component={Index} />
            <CheckIfLoggedIn exact path="/register" component={Register} />
            <CheckIfLoggedIn exact path="/login" component={Index} />
            <CheckIfAccountVerified
              exact
              path="/verify-account"
              component={VerifyAccount}
            />
            <Route exact path="/404" component={Error404} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </CookiesProvider>
    );
  }
}
