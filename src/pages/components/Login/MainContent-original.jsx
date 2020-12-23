import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-xs.png";

function MainContent(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
    errorMessage: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    document
      .getElementById("sign-in-button")
      .setAttribute("disabled", "disabled");
    document.getElementById("sign-in-button-text").classList.add("d-none");
    document.getElementById("sign-in-button-loader").classList.remove("d-none");
    if (state.email == "" && state.password != "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Please enter an email ID.",
      }));
      document.getElementById("email").classList.remove("red-outline");
      document
        .getElementById("sign-in-button")
        .removeAttribute("disabled", "disabled");
      document.getElementById("sign-in-button-text").classList.remove("d-none");
      document.getElementById("sign-in-button-loader").classList.add("d-none");
    } else if (state.email != "" && state.password == "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Please enter a password.",
      }));
      document.getElementById("password").classList.add("red-outline");
      document
        .getElementById("sign-in-button")
        .removeAttribute("disabled", "disabled");
      document.getElementById("sign-in-button-text").classList.remove("d-none");
      document.getElementById("sign-in-button-loader").classList.add("d-none");
    } else if (state.email == "" && state.password == "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Enter email and password.",
      }));
      document.getElementById("email").classList.add("red-outline");
      document.getElementById("password").classList.add("red-outline");
      document
        .getElementById("sign-in-button")
        .removeAttribute("disabled", "disabled");
      document.getElementById("sign-in-button-text").classList.remove("d-none");
      document.getElementById("sign-in-button-loader").classList.add("d-none");
    } else {
      document.getElementById("email").classList.remove("red-outline");
      document.getElementById("password").classList.remove("red-outline");
      axios
        .post(
          localStorage.APIRoute +
            "login.php?email=" +
            state.email +
            "&password=" +
            state.password
        )
        .then(function (response) {
          console.log(response);
          if (response.data === "db-error") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "An unknown error occurred. Code - 1001.",
            }));
            document
              .getElementById("sign-in-button")
              .removeAttribute("disabled", "disabled");
            document
              .getElementById("sign-in-button-text")
              .classList.remove("d-none");
            document
              .getElementById("sign-in-button-loader")
              .classList.add("d-none");
          } else if (response.data === "invalid-password") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "Email and password do not match.",
            }));
            document
              .getElementById("sign-in-button")
              .removeAttribute("disabled", "disabled");
            document
              .getElementById("sign-in-button-text")
              .classList.remove("d-none");
            document
              .getElementById("sign-in-button-loader")
              .classList.add("d-none");
          } else if (response.data === "user-doesnt-exist") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "Account does not exist.",
            }));
            document
              .getElementById("sign-in-button")
              .removeAttribute("disabled", "disabled");
            document
              .getElementById("sign-in-button-text")
              .classList.remove("d-none");
            document
              .getElementById("sign-in-button-loader")
              .classList.add("d-none");
          } else {
            localStorage.id = response.data.id;
            localStorage.email = response.data.email;
            localStorage.auth_token = response.data.auth_token;

            if (response.data.emailConfirmed == 0) {
              redirectToVerify();
            } else {
              redirectToHome();
            }
            props.showError(null);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const redirectToHome = () => {
    props.history.push("/home");
  };

  const redirectToVerify = () => {
    props.history.push("/verify-account");
  };

  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1}>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="main-panel" style={{ backgroundColor: "#000" }}>
              <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                  <div className="col-lg-6 col-xl-5 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                      <div className="mb-3">
                        <img src={logo} alt="logo" />
                      </div>
                      <h4 className="font-weight-bold">
                        Hello! Let's get started!
                      </h4>
                      <h6 className="font-weight-semi-bold">
                        Sign in to continue.
                      </h6>
                      <form className="pt-3">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="email"
                            placeholder="Email"
                            value={state.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="text-danger font-weight-bold text-small">
                          {state.errorMessage}
                        </div>
                        <div className="mt-3">
                          <button
                            id="sign-in-button"
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn text-white"
                            onClick={handleSubmitClick}
                          >
                            <span id="sign-in-button-text">SIGN IN</span>
                            <span
                              id="sign-in-button-loader"
                              className="spinner-border spinner-border-sm d-none"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                        <div className="my-2 d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <label className="form-check-label text-muted">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              Keep me signed in
                            </label>
                          </div>
                          <a href="#" className="auth-link text-black">
                            Forgot password?
                          </a>
                        </div>
                        <div className="mt-4">
                          <Link to={"/register"}>
                            <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                              CREATE AN ACCOUNT
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
      </motion.div>
    </motion.div>
  );
}

export default withRouter(MainContent);
