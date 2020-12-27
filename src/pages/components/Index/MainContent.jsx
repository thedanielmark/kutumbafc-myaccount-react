import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

function MainContent() {
  function getCookieValue(cookieName) {
    var b = document.cookie.match(
      "(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)"
    );
    return b ? b.pop() : "";
  }

  var phone = getCookieValue("phone");
  var auth_token = getCookieValue("auth_token");

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    localStorage.APIRoute +
      "get-profile.php?phone=" +
      phone +
      "&auth_token=" +
      auth_token,
    fetcher, { refreshInterval: 1000 }
  );

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!data) {
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

    function editPersonalInfo() {
      // Hide initial state
      document.getElementById("email").classList.add("d-none");
      document.getElementById("fullName").classList.add("d-none");
      document.getElementById("jerseyName").classList.add("d-none");
      document.getElementById("jerseyNo").classList.add("d-none");

      // Show inputs and button
      document.getElementById("emailInput").classList.remove("d-none");
      document.getElementById("fullNameInput").classList.remove("d-none");
      document.getElementById("jerseyNameInput").classList.remove("d-none");
      document.getElementById("jerseyNoInput").classList.remove("d-none");

      document.getElementById("editPersonalInfoButton").classList.add("d-none");
      document
        .getElementById("cancelUpdatePersonalInfoButton")
        .classList.remove("d-none");
      document
        .getElementById("updatePersonalInfoButton")
        .classList.remove("d-none");
    }

    function cancelUpdatePersonalInfo() {
      // Hide initial state
      document.getElementById("email").classList.remove("d-none");
      document.getElementById("fullName").classList.remove("d-none");
      document.getElementById("jerseyName").classList.remove("d-none");
      document.getElementById("jerseyNo").classList.remove("d-none");

      // Show inputs and button
      document.getElementById("emailInput").classList.add("d-none");
      document.getElementById("fullNameInput").classList.add("d-none");
      document.getElementById("jerseyNameInput").classList.add("d-none");
      document.getElementById("jerseyNoInput").classList.add("d-none");

      document
        .getElementById("editPersonalInfoButton")
        .classList.remove("d-none");
      document
        .getElementById("cancelUpdatePersonalInfoButton")
        .classList.add("d-none");
      document
        .getElementById("updatePersonalInfoButton")
        .classList.add("d-none");
    }

    function updatePersonalInfo() {
      // Hide button text
      document.getElementById("updatePersonalInfoText").classList.add("d-none");
      // Show loader
      document
        .getElementById("updatePersonalInfoLoader")
        .classList.remove("d-none");
      var email = document.getElementById("emailInput").value;
      var full_name = document.getElementById("fullNameInput").value;
      var jersey_name = document.getElementById("jerseyNameInput").value;
      var jersey_no = document.getElementById("jerseyNoInput").value;

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
          "update-personal-info.php?phone=" +
          phone +
          "&auth_token=" +
          auth_token +
          "&email=" +
          email +
          "&full_name=" +
          full_name +
          "&jersey_name=" +
          jersey_name +
          "&jersey_no=" +
          jersey_no
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            if (result.status === "success") {
              // Hide button text
              document
                .getElementById("updatePersonalInfoText")
                .classList.remove("d-none");
              // Show loader
              document
                .getElementById("updatePersonalInfoLoader")
                .classList.add("d-none");
              // Hide update button
              document
                .getElementById("updatePersonalInfoButton")
                .classList.add("d-none");

              // Show initial state
              document.getElementById("email").classList.remove("d-none");
              document.getElementById("fullName").classList.remove("d-none");
              document.getElementById("jerseyName").classList.remove("d-none");
              document.getElementById("jerseyNo").classList.remove("d-none");

              // Hide inputs and button
              document.getElementById("emailInput").classList.add("d-none");
              document.getElementById("fullNameInput").classList.add("d-none");
              document
                .getElementById("jerseyNameInput")
                .classList.add("d-none");
              document.getElementById("jerseyNoInput").classList.add("d-none");
              document
                .getElementById("editPersonalInfoButton")
                .classList.remove("d-none");              
              document
                .getElementById("cancelUpdatePersonalInfoButton")
                .classList.add("d-none");
            } else if (result === "invalid-auth") {
              // Create logout function here
            }
          },
          (error) => {}
        );
    }

    return (
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fade1}>
          <div className="container pt-5 mt-5 d-flex flex-wrap">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <img src="images/t-shirt.png" className="profile-t-shirt" />
              <h5 className="profile-t-shirt-name">{data.jersey_name}</h5>
              <h5 className="profile-t-shirt-number">{data.jersey_no}</h5>
            </div>
            <div className="col-12 col-lg-6 text-center d-flex align-items-center">
              <div className="mb-5">
                <h3>{data.jersey_name}</h3>
                <Link to="/buy" className="btn btn-primary rounded-pill">
                  Buy Merchandise
                </Link>
                <p className="text-white px-5 mt-5 font-weight-bold h5">
                  Daniel Mark is one of our most passionate fans from India. The
                  21 year-old's My United debut came on 20 Oct 2019. Daniel's
                  favourite player is Daniel James.
                </p>
              </div>
            </div>
          </div>

          <div className="site-content">
            <div className="container">
              {/* Personal Information */}
              <div className="card card--lg">
                <div className="card__header d-flex justify-content-between">
                  <h4>Personal Information</h4>
                  <i
                    className="fas fa-edit"
                    onClick={editPersonalInfo}
                    id="editPersonalInfoButton"
                  ></i>
                  <i
                    id="cancelUpdatePersonalInfoButton"
                    className="far fa-window-close d-none"
                    onClick={cancelUpdatePersonalInfo}
                  ></i>
                </div>
                <div className="card__content">
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
                        <h5 id="email" className="text-lowercase">
                          {data.email}
                        </h5>
                        <input
                          type="email"
                          className="form-control d-none"
                          id="emailInput"
                          defaultValue={data.email}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-username">Name</label>
                        <h5 id="fullName" className="text-capitalize">
                          {data.full_name}
                        </h5>
                        <input
                          type="text"
                          className="form-control d-none"
                          id="fullNameInput"
                          defaultValue={data.full_name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-first-name">Jersey Name</label>
                        <h5 id="jerseyName" className="text-capitalize">
                          {data.jersey_name}
                        </h5>
                        <input
                          type="text"
                          className="form-control d-none"
                          id="jerseyNameInput"
                          defaultValue={data.jersey_name}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-last-name">Jersey Number</label>
                        <h5 id="jerseyNo" className="text-capitalize">
                          {data.jersey_no}
                        </h5>
                        <input
                          type="text"
                          className="form-control d-none"
                          id="jerseyNoInput"
                          defaultValue={data.jersey_no}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    id="updatePersonalInfoButton"
                    className="btn btn-primary-inverse d-none"
                    onClick={updatePersonalInfo}
                  >
                    <div
                      id="updatePersonalInfoLoader"
                      className="spinner-border spinner-border-sm text-light d-none"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <span id="updatePersonalInfoText">Update</span>
                  </button>
                </div>
              </div>
              {/* Personal Information / End */}

              {/* Shipping Information */}
              <div className="card card--lg">
                <div className="card__header d-flex justify-content-between">
                  <h4>Shipping Information</h4>
                  <i className="fas fa-edit"></i>
                </div>
                <div className="card__content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-username">Name</label>
                        <h5 className="text-capitalize">
                          {data.shipping_name}
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-email">Phone</label>
                        <h5>+{data.shipping_phone}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-group--sm">
                    <label htmlFor="account-address-1">Full Address</label>
                    <h5>{data.shipping_address_line_1}</h5>
                  </div>
                  <div className="form-group">
                    <h5>{data.shipping_address_line_2}</h5>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-city">City</label>
                        <h5>{data.shipping_city}</h5>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-city">State</label>
                        <h5>{data.shipping_state}</h5>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-postcode">Zip Code</label>
                        <h5>{data.shipping_zipcode}</h5>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="account-country">Country</label>
                        <h5 className="text-capitalize">
                          {data.shipping_country}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shipping Information / End */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}

export default withRouter(MainContent);
