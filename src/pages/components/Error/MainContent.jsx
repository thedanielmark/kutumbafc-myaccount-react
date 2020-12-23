import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Link } from "react-router-dom";

export default function MainContent() {
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
            <div className="content-wrapper d-flex align-items-center text-center error-page">
              <div className="row flex-grow">
                <div className="col-lg-7 mx-auto text-white">
                  <div className="row align-items-center d-flex flex-row">
                    <div className="col-lg-6 text-lg-right pr-lg-4 d-flex justify-content-center justify-content-lg-end">
                      <span
                        className="mb-0 text-white font-weight-bold"
                        style={{ fontSize: "12rem" }}
                      >
                        404
                      </span>
                    </div>
                    <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                      <h2 className="text-white">Uh Oh!</h2>
                      <h3 className="font-weight-light text-white">
                        Looks like the page you requested for doesn't exist :(
                      </h3>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 text-center mt-xl-2">
                      <Link to={"/profile"} className="text-white display-5">
                        Take me home
                      </Link>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 mt-xl-2">
                      <p className="text-white font-weight-medium text-center">
                        Copyright &copy; 2021 | All Rights Reserved
                      </p>
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