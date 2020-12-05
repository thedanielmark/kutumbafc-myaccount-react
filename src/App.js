import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Importing auth components
import ProtectedRoute from "./ProtectedRoute";
import CheckIfLoggedIn from "./CheckIfLoggedIn";
import CheckIfAccountVerified from "./CheckIfAccountVerified";

// Importing all pages
import Index from "./pages/Index";
import Fixtures from "./pages/Fixtures";
import Newsroom from "./pages/Newsroom";
import Gallery from "./pages/Gallery";
import Merch from "./pages/Merch";
import Players from "./pages/Players";
import Login from "./pages/Login";
import VerifyAccount from "./pages/VerifyAccount";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import CodeOfConduct from "./pages/CodeOfConduct";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Error404 from "./pages/Error404";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <CheckIfLoggedIn exact path="/" component={Index} />
          <Route exact path="/code-of-conduct" component={CodeOfConduct} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <ProtectedRoute
            exact
            path="/community-guidelines"
            component={CommunityGuidelines}
          />
          <ProtectedRoute
            exact
            path="/terms-of-service"
            component={TermsOfService}
          />
          <Route exact path="/fixtures" component={Fixtures} />
          <Route exact path="/players" component={Players} />
          <ProtectedRoute exact path="/merch" component={Merch} />
          <Route exact path="/newsroom" component={Newsroom} />
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
