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
      .getElementById("resend-email-button")
      .removeAttribute("disabled", "disabled");
    document
      .getElementById("resend-email-button-text")
      .classList.remove("d-none");
    document
      .getElementById("resend-email-button-loader")
      .classList.add("d-none");
  };

  const resendEmail = (e) => {
    document
      .getElementById("resend-email-button")
      .setAttribute("disabled", "disabled");
    document
      .getElementById("resend-email-button-text")
      .classList.add("d-none");
    document
      .getElementById("resend-email-button-loader")
      .classList.remove("d-none");

    axios
      .post(
        localStorage.APIRoute +
          "resend-verification-mail.php?email=" +
          localStorage.email +
          "&auth_token=" +
          localStorage.auth_token
      )
      .then(function (response) {
        console.log(response);
        if (response.data === "mail-error") {
          setState((prevState) => ({
            ...prevState,
            errorMessage: "An error occurred. Code - 5000.",
          }));
          resetSubmitButton();
        } else if (response.data === "db-error") {
          setState((prevState) => ({
            ...prevState,
            errorMessage:
              "An error occurred. Code - 1001.",
          }));
          resetResendButton();
        } else if (response.data === "mail-success") {
          resetResendButton();
          document.getElementById("resend-email-button-text").innerHTML = "Verification Code Sent.";
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
            "verify-account.php?email=" +
            localStorage.email +
            "&code=" +
            state.code +
            "&client=react"
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
          } else if (response.data === "unknown-client") {
            setState((prevState) => ({
              ...prevState,
              errorMessage:
                "A required parameter was missing from your request. Code - 2000",
            }));
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
    props.history.push("/home");
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
                      <h4 className="font-weight-bold">Account Verification</h4>
                      <h6 className="font-weight-semi-bold">
                        Enter the code sent to {localStorage.email} to continue.
                      </h6>
                      <form className="pt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg font-weight-semi-bold"
                            id="code"
                            placeholder="6 Digit Code"
                            value={state.code}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="text-danger font-weight-bold text-small">
                          {state.errorMessage}
                        </div>
                        <div className="mt-3">
                          <button
                            id="verify-account-button"
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn text-white"
                            onClick={handleSubmitClick}
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
                        </div>
                        <div className="mt-3">
                          <button
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                            id="resend-email-button"
                            onClick={resendEmail}
                          >
                            <span id="resend-email-button-text">
                              Resend Code
                            </span>
                            <span
                              id="resend-email-button-loader"
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
