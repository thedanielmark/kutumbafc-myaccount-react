import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

function MainContent() {
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

  const fade2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 4,
        ease: easing,
      },
    },
  };

  const fade3 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 5,
        ease: easing,
      },
    },
  };

  const fade4 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 6,
        ease: easing,
      },
    },
  };

  return (
    <div className="site-content">
      <div className="container">
        {/* Error 404 */}
        <div className="error-404">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <motion.div
                exit={{ opacity: 0 }}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={fade1}>
                  <figure className="error-404__figure">
                    <img src="soccer-dark/assets/images/icon-ghost.svg" />
                  </figure>
                </motion.div>
              </motion.div>
              <motion.div
                exit={{ opacity: 0 }}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={fade2}>
                  <header className="error__header">
                    <h2 className="error__title">Oh Snap :(</h2>
                    <h3 className="error__subtitle">
                      Seems like we have a problem!
                    </h3>
                  </header>
                </motion.div>
              </motion.div>
              <motion.div
                exit={{ opacity: 0 }}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={fade3}>
                  <div className="error__description">
                    The page you are looking for has been moved or doesn’t exist
                    anymore, if you like you can return to our homepage. If the
                    problem persists, please send us an email via{" "}
                    <a href="mailto:info@kutumbafc.com">info@kutumbafc.com</a>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                exit={{ opacity: 0 }}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={fade4}>
                  <footer className="error__cta">
                    <a
                      href={localStorage.myaccount}
                      className="btn btn-primary"
                    >
                      Go To Account
                    </a>{" "}
                    <a href={localStorage.home} className="btn btn-primary-inverse">
                      Take Me Home
                    </a>
                  </footer>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Error 404 / End */}
      </div>
    </div>
  );
}

export default withRouter(MainContent);
