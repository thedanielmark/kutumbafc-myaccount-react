import React from "react";
import { Redirect } from "react-router-dom";

class CheckIfLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    function getCookieValue(cookieName) {
      var b = document.cookie.match(
        "(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)"
      );
      return b ? b.pop() : "";
    }

    var phone = getCookieValue("phone");
    var auth_token = getCookieValue("auth_token");

    fetch(
      localStorage.APIRoute +
        "auth-status.php?phone=" +
        phone +
        "&auth_token=" +
        auth_token
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      const Component = this.props.component;

      if (data.isAuthenticated === true) {
        return data.phoneConfirmed ? (
          <Component />
        ) : (
          window.location.replace(
            "https://accounts.kutumbafc.com/verify-account"
          )
        );
      } else {
        window.location.replace("https://accounts.kutumbafc.com");
      }
    }
  }
}

export default CheckIfLoggedIn;
