import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

function MainContent(props) {
  const [state, setState] = useState({
    countryCode: 213,
    phone: "",
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
    if (state.phone == "" && state.password != "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Please enter a phone number.",
      }));
      document.getElementById("phone").classList.remove("red-outline");
      document
        .getElementById("sign-in-button")
        .removeAttribute("disabled", "disabled");
      document.getElementById("sign-in-button-text").classList.remove("d-none");
      document.getElementById("sign-in-button-loader").classList.add("d-none");
    } else if (state.phone != "" && state.password == "") {
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
    } else if (state.phone == "" && state.password == "") {
      setState((prevState) => ({
        ...prevState,
        errorMessage: "Enter phone and password.",
      }));
      document.getElementById("phone").classList.add("red-outline");
      document.getElementById("password").classList.add("red-outline");
      document
        .getElementById("sign-in-button")
        .removeAttribute("disabled", "disabled");
      document.getElementById("sign-in-button-text").classList.remove("d-none");
      document.getElementById("sign-in-button-loader").classList.add("d-none");
    } else {
      document.getElementById("countryCode").classList.remove("red-outline");
      document.getElementById("phone").classList.remove("red-outline");
      document.getElementById("password").classList.remove("red-outline");
      console.log(
        localStorage.APIRoute +
          "login.php?phone=" +
          state.countryCode +
          state.phone +
          "&password=" +
          state.password
      );
      axios
        .post(
          localStorage.APIRoute +
            "login.php?phone=" +
            state.countryCode +
            state.phone +
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
              errorMessage: "Phone and password do not match.",
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
            function getCookieValue(a) {
              var b = document.cookie.match(
                "(^|;)\\s*" + a + "\\s*=\\s*([^;]+)"
              );
              return b ? b.pop() : "";
            }

            localStorage.id = response.data.id;
            localStorage.phone = response.data.phone;
            localStorage.auth_token = response.data.auth_token;

            if (response.data.phoneConfirmed == 0) {
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
    window.location.href = "https://myaccount.kutumbafc.com/";
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
        duration: 3,
        ease: easing,
      },
    },
  };

  const [cookies, setCookie, removeCookie] = useCookies([
    "id",
    "phone",
    "auth_token",
  ]);

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1}>
        <div className="container d-flex justify-content-center pt-5 mt-5">
          <div className="col-md-10 d-flex justify-content-center">
            <img src="images/t-shirt.png" className="profile-t-shirt" />
            <h5 className="profile-t-shirt-name">Danny</h5>
            <h5 className="profile-t-shirt-number">00</h5>
          </div>
        </div>

        <div className="site-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* Account Navigation */}
                <div className="card">
                  <div className="card__header">
                    <h4>Welcome Back!</h4>
                  </div>
                  <div className="card__content">
                    <nav className="df-account-navigation">
                      <ul>
                        <li className="df-account-navigation__link">
                          <a href="#">Personal Information</a>
                        </li>
                        <li className="df-account-navigation__link">
                          <a href="#">Billing Information</a>
                        </li>
                        <li className="df-account-navigation__link">
                          <a href="#">Shipping Information</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* Account Navigation / End */}
              </div>
              <div className="col-lg-8">
                {/* Personal Information */}
                <div className="card card--lg">
                  <div className="card__header">
                    <h4>Personal Information</h4>
                  </div>
                  <div className="card__content">
                    <form action="#" className="df-personal-info">
                      <div className="form-group form-group--upload">
                        <div className="form-group__avatar">
                          <img src={"images/avatar-empty.png"} />
                          <div className="form-group__label">
                            <h6>Profile Photo</h6>
                            <span>Minimum size 60x60px</span>
                          </div>
                        </div>
                        <div className="form-group__upload">
                          <label className="btn btn-default btn-xs btn-file">
                            Upload Image
                            <input type="file" style={{ display: "none" }} />
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-email">Email</label>
                            <h5 className="text-lowercase">danielmark.uc@gmail.com</h5>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-username">Username</label>
                            <h5 className="text-lowercase">thedanielmark</h5>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-first-name">
                              First Name
                            </label>
                            <h5 className="text-capitalize">Daniel</h5>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-last-name">Last Name</label>{" "}
                            <h5 className="text-capitalize">Mark</h5>
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-group--sm">
                        <label htmlFor="account-address-1">Full Address</label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          defaultValue
                          name="account-address-1"
                          id="account-address-1"
                          placeholder="Enter your street address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue
                          name="account-address-2"
                          id="account-address-2"
                          placeholder="Enter your apartment, floor, suite, etc..."
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="account-country">Country</label>
                        <h5 className="text-capitalize">India</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-city">State or City</label>{" "}
                            <select
                              name="account-city"
                              id="account-city"
                              className="form-control"
                            >
                              <option value={0}>
                                Select your state or city...
                              </option>
                              <option value={1}>New York</option>
                              <option value={2}>Barcelona</option>
                              <option value={3}>Paris</option>
                              <option value={4}>London</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="account-postcode">Zip Code</label>{" "}
                            <input
                              type="text"
                              name="account-postcode"
                              id="account-postcode"
                              className="form-control"
                              placeholder="Your zip or postal code..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group--submit">
                        <button
                          type="submit"
                          className="btn btn-default btn-lg btn-block"
                        >
                          See all the changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Personal Information / End */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default withRouter(MainContent);
