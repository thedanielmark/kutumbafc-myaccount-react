import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import useSWR, { mutate } from "swr";
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
    fetcher
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
      document.getElementById("shippingName").classList.add("d-none");
      document.getElementById("shippingPhoneCode").classList.add("d-none");
      document.getElementById("shippingPhone").classList.add("d-none");
      document.getElementById("shippingAddressLine1").classList.add("d-none");
      document.getElementById("shippingAddressLine2").classList.add("d-none");
      document.getElementById("shippingCity").classList.add("d-none");
      document.getElementById("shippingState").classList.add("d-none");
      document.getElementById("shippingZipcode").classList.add("d-none");
      document.getElementById("shippingCountry").classList.add("d-none");

      // Show inputs and button
      document.getElementById("emailInput").classList.remove("d-none");
      document.getElementById("fullNameInput").classList.remove("d-none");
      document.getElementById("jerseyNameInput").classList.remove("d-none");
      document.getElementById("jerseyNoInput").classList.remove("d-none");
      document.getElementById("shippingNameInput").classList.remove("d-none");
      document
        .getElementById("shippingPhoneCodeInput")
        .classList.remove("d-none");
      document.getElementById("shippingPhoneInput").classList.remove("d-none");
      document
        .getElementById("shippingAddressLine1Input")
        .classList.remove("d-none");
      document
        .getElementById("shippingAddressLine2Input")
        .classList.remove("d-none");
      document.getElementById("shippingCityInput").classList.remove("d-none");
      document.getElementById("shippingStateInput").classList.remove("d-none");
      document
        .getElementById("shippingZipcodeInput")
        .classList.remove("d-none");
      document
        .getElementById("shippingCountryInput")
        .classList.remove("d-none");

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
      document.getElementById("shippingName").classList.remove("d-none");
      document.getElementById("shippingPhoneCode").classList.remove("d-none");
      document.getElementById("shippingPhone").classList.remove("d-none");
      document
        .getElementById("shippingAddressLine1")
        .classList.remove("d-none");
      document
        .getElementById("shippingAddressLine2")
        .classList.remove("d-none");
      document.getElementById("shippingCity").classList.remove("d-none");
      document.getElementById("shippingState").classList.remove("d-none");
      document.getElementById("shippingZipcode").classList.remove("d-none");
      document.getElementById("shippingCountry").classList.remove("d-none");

      // Show inputs and button
      document.getElementById("emailInput").classList.add("d-none");
      document.getElementById("fullNameInput").classList.add("d-none");
      document.getElementById("jerseyNameInput").classList.add("d-none");
      document.getElementById("jerseyNoInput").classList.add("d-none");
      document.getElementById("shippingNameInput").classList.add("d-none");
      document.getElementById("shippingPhoneCodeInput").classList.add("d-none");
      document.getElementById("shippingPhoneInput").classList.add("d-none");
      document
        .getElementById("shippingAddressLine1Input")
        .classList.add("d-none");
      document
        .getElementById("shippingAddressLine2Input")
        .classList.add("d-none");
      document.getElementById("shippingCityInput").classList.add("d-none");
      document.getElementById("shippingStateInput").classList.add("d-none");
      document.getElementById("shippingZipcodeInput").classList.add("d-none");
      document.getElementById("shippingCountryInput").classList.add("d-none");

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
      var shipping_name = document.getElementById("shippingNameInput").value;
      var shipping_phone_code = document.getElementById(
        "shippingPhoneCodeInput"
      ).value;
      var shipping_phone = document.getElementById("shippingPhoneInput").value;
      var shipping_address_line_1 = document.getElementById(
        "shippingAddressLine1Input"
      ).value;
      var shipping_address_line_2 = document.getElementById(
        "shippingAddressLine2Input"
      ).value;
      var shipping_city = document.getElementById("shippingCityInput").value;
      var shipping_state = document.getElementById("shippingStateInput").value;
      var shipping_zipcode = document.getElementById("shippingZipcodeInput")
        .value;
      var shipping_country = document.getElementById("shippingCountryInput")
        .value;

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
          jersey_no +
          "&shipping_name=" +
          shipping_name +
          "&shipping_phone_code=" +
          shipping_phone_code +
          "&shipping_phone=" +
          shipping_phone +
          "&shipping_address_line_1=" +
          shipping_address_line_1 +
          "&shipping_address_line_2=" +
          shipping_address_line_2 +
          "&shipping_city=" +
          shipping_city +
          "&shipping_state=" +
          shipping_state +
          "&shipping_zipcode=" +
          shipping_zipcode +
          "&shipping_country=" +
          shipping_country
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            if (result.status === "success") {
              mutate(
                localStorage.APIRoute +
                  "get-profile.php?phone=" +
                  phone +
                  "&auth_token=" +
                  auth_token
              );
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
              document
                .getElementById("shippingName")
                .classList.remove("d-none");
              document
                .getElementById("shippingPhoneCode")
                .classList.remove("d-none");
              document
                .getElementById("shippingPhone")
                .classList.remove("d-none");
              document
                .getElementById("shippingAddressLine1")
                .classList.remove("d-none");
              document
                .getElementById("shippingAddressLine2")
                .classList.remove("d-none");
              document
                .getElementById("shippingCity")
                .classList.remove("d-none");
              document
                .getElementById("shippingState")
                .classList.remove("d-none");
              document
                .getElementById("shippingZipcode")
                .classList.remove("d-none");
              document
                .getElementById("shippingCountry")
                .classList.remove("d-none");

              // Hide inputs and button
              document.getElementById("emailInput").classList.add("d-none");
              document.getElementById("fullNameInput").classList.add("d-none");
              document
                .getElementById("jerseyNameInput")
                .classList.add("d-none");
              document.getElementById("jerseyNoInput").classList.add("d-none");
              document
                .getElementById("shippingNameInput")
                .classList.add("d-none");
              document
                .getElementById("shippingPhoneCodeInput")
                .classList.add("d-none");
              document
                .getElementById("shippingPhoneInput")
                .classList.add("d-none");
              document
                .getElementById("shippingAddressLine1Input")
                .classList.add("d-none");
              document
                .getElementById("shippingAddressLine2Input")
                .classList.add("d-none");
              document
                .getElementById("shippingCityInput")
                .classList.add("d-none");
              document
                .getElementById("shippingStateInput")
                .classList.add("d-none");
              document
                .getElementById("shippingZipcodeInput")
                .classList.add("d-none");
              document
                .getElementById("shippingCountryInput")
                .classList.add("d-none");

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
          <div className="site-content">
            <div className="container">
              Hola
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
}

export default withRouter(MainContent);
