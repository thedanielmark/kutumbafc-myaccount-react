import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

function MainContent(props) {
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
            <h5 className="profile-t-shirt-name">Danny</h5>
            <h5 className="profile-t-shirt-number">00</h5>
          </div>
          <div className="col-12 col-lg-6 text-center d-flex align-items-center">
            <div className="mb-5">
              <h3>Daniel Mark</h3>
              <Link className="btn btn-primary rounded-pill">
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
                <i class="fas fa-edit"></i>
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
                      <h5 className="text-lowercase">
                        danielmark.uc@gmail.com
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-username">Jersey</label>
                      <h5 className="text-uppercase">Danny - 00</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-first-name">First Name</label>
                      <h5 className="text-capitalize">Daniel</h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-last-name">Last Name</label>
                      <h5 className="text-capitalize">Mark</h5>
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
                <i class="fas fa-edit"></i>
              </div>
              <div className="card__content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-username">Name</label>
                      <h5 className="text-capitalize">Daniel Mark</h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-email">Phone</label>
                      <h5>+91 8610045905</h5>
                    </div>
                  </div>
                </div>
                <div className="form-group form-group--sm">
                  <label htmlFor="account-address-1">Full Address</label>
                  <h5>14/1 Ajanta Apartments, Thirunarayana Avenue</h5>
                </div>
                <div className="form-group">
                  <h5>New Avadi Road, Kilpauk Garden</h5>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-city">City</label>
                      <h5>Chennai</h5>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-city">State</label>
                      <h5>Tamil Nadu</h5>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-postcode">Zip Code</label>
                      <h5>600010</h5>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="account-country">Country</label>
                      <h5 className="text-capitalize">India</h5>
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

export default withRouter(MainContent);
