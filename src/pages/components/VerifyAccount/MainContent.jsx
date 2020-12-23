import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

function MainContent(props) {
  const [state, setState] = useState({
    code: "",
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

  const resetSubmitButton = (e) => {
    document
      .getElementById("verify-account-button")
      .removeAttribute("disabled", "disabled");
    document
      .getElementById("verify-account-button-text")
      .classList.remove("d-none");
    document
      .getElementById("verify-account-button-loader")
      .classList.add("d-none");
  };

  const resetResendButton = (e) => {
    document
      .getElementById("resend-code-button")
      .removeAttribute("disabled", "disabled");
    document
      .getElementById("resend-code-button-text")
      .classList.remove("d-none");
    document
      .getElementById("resend-code-button-loader")
      .classList.add("d-none");
  };

  const resendEmail = (e) => {
    document
      .getElementById("resend-code-button")
      .setAttribute("disabled", "disabled");
    document.getElementById("resend-code-button-text").classList.add("d-none");
    document
      .getElementById("resend-code-button-loader")
      .classList.remove("d-none");

    axios
      .post(
        localStorage.APIRoute +
          "resend-verification-code.php?phone=" +
          localStorage.phone +
          "&auth_token=" +
          localStorage.auth_token
      )
      .then(function (response) {
        console.log(response);
        if (response.data === "resend-failed") {
          setState((prevState) => ({
            ...prevState,
            errorMessage: "An error occurred. Code - 5000.",
          }));
          resetSubmitButton();
        } else if (response.data === "db-error") {
          setState((prevState) => ({
            ...prevState,
            errorMessage: "An error occurred. Code - 1001.",
          }));
          resetResendButton();
        } else if (response.data === "resend-success") {
          resetResendButton();
          document.getElementById("resend-code-button-text").innerHTML =
            "Verification Code Resent";
        } else if (response.data === "invalid-auth") {
          redirectToLogin();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    document
      .getElementById("verify-account-button")
      .setAttribute("disabled", "disabled");
    document
      .getElementById("verify-account-button-text")
      .classList.add("d-none");
    document
      .getElementById("verify-account-button-loader")
      .classList.remove("d-none");
    if (state.code == "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Please enter a code.",
      }));
      document.getElementById("code").classList.add("red-outline");
    } else {
      document
        .getElementById("verify-account-button")
        .setAttribute("disabled", "disabled");
      document
        .getElementById("verify-account-button-text")
        .classList.add("d-none");
      document
        .getElementById("verify-account-button-loader")
        .classList.remove("d-none");
      document.getElementById("code").classList.remove("red-outline");
      axios
        .post(
          localStorage.APIRoute +
            "verify-account.php?phone=" +
            localStorage.phone +
            "&code=" +
            state.code
        )
        .then(function (response) {
          console.log(response);
          if (response.data === "error") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "An error occurred. Code - 1001.",
            }));
            resetSubmitButton();
          } else if (response.data === "invalid-code") {
            setState((prevState) => ({
              ...prevState,
              errorMessage: "Oops, seems like the code you entered was wrong.",
            }));
            resetSubmitButton();
          } else if (response.data === "verified") {
            redirectToHome();
            props.showError(null);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const redirectToHome = () => {
    window.location.replace = "https://myaccount.kutumbafc.com/";
  };

  const redirectToLogin = () => {
    localStorage.auth_token = "";
    props.history.push("/login");
  };

  const logout = () => {
    localStorage.auth_token = "";
    props.history.push("/login");
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
        <div className="site-content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 col-lg-6">
                {/* Login */}
                <div className="card">
                  <div className="card__header">
                    <h4>Verify Your Account</h4>
                  </div>
                  <div className="card__content">
                    {/* Login Form */}
                    <form>
                      <h6 className="font-weight-semi-bold">
                        Enter the code sent to {"+" + localStorage.phone} to
                        continue.
                      </h6>
                      <div className="form-group">
                        <label htmlFor="login-name">Your Code</label>
                        <input
                          type="text"
                          name="login-name"
                          id="code"
                          className="form-control"
                          placeholder="Enter code"
                          value={state.code}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="text-danger font-weight-bold text-small mb-3">
                        {state.errorMessage}
                      </div>
                      <div className="form-group form-group--sm">
                        <button
                          className="btn btn-primary-inverse btn-lg btn-block mb-4"
                          onClick={handleSubmitClick}
                          id="verify-account-button"
                        >
                          <span id="verify-account-button-text">
                            Verify Account
                          </span>
                          <span
                            id="verify-account-button-loader"
                            className="spinner-border spinner-border-sm d-none"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        </button>

                        <hr className="bg-secondary" />

                        <div className="form-group form-group--password-forgot mt-4 mb-2">
                          <span className="password-reminder">
                            Didn't receive the code?
                          </span>
                        </div>

                        <button
                          className="btn btn-primary-inverse btn-lg btn-block"
                          id="resend-code-button"
                          onClick={resendEmail}
                        >
                          <span id="resend-code-button-text">Resend Code</span>
                          <span
                            id="resend-code-button-loader"
                            className="spinner-border spinner-border-sm d-none"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </div>
                    </form>
                    {/* Login Form / End */}
                  </div>
                </div>
                {/* Login / End */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default withRouter(MainContent);
