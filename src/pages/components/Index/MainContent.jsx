import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

class MainContent extends React.Component {
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
        "get-profile.php?phone=" +
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
                    Daniel Mark is one of our most passionate fans from India.
                    The 21 year-old's My United debut came on 20 Oct 2019.
                    Daniel's favourite player is Daniel James.
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
                    <i className="fas fa-edit"></i>
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
                          <h5 className="text-lowercase">{data.email}</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="account-username">Name</label>
                          <h5 className="text-uppercase">{data.full_name}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="account-first-name">
                            Jersey Name
                          </label>
                          <h5 className="text-capitalize">
                            {data.jersey_name}
                          </h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="account-last-name">
                            Jersey Number
                          </label>
                          <h5 className="text-capitalize">{data.jersey_no}</h5>
                        </div>
                      </div>
                    </div>
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
                          <h5 className="text-capitalize">{data.shipping_country}</h5>
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
}
export default withRouter(MainContent);
