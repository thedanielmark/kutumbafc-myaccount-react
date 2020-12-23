import React from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

function TopBar(props) {
  const logout = () => {
    localStorage.auth_token = "";
    props.history.push("/login");
  };

  const toggleDropdownMenu = () => {
    document.getElementById("bottomNavbar").classList.toggle("header-toggled");
  };

  // if (!data) return <h2>Loading...</h2>;
  // if (error) return <h2 className="text-danger">Error bitches</h2>;
  return (
    <React.Fragment>
      <div className="horizontal-menu">
        <nav
          className="navbar top-navbar col-lg-12 col-12 p-0"
          style={{ backgroundColor: "black" }}
        >
          <div className="container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="index.html">
                <img src="images/logo-white.svg" alt="logo" />
              </a>
              <a className="navbar-brand brand-logo-mini" href="index.html">
                <img src="images/logo-mini.svg" alt="logo" />
              </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                    id="notificationDropdown"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-bell-outline mx-0" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Notifications
                    </p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="mdi mdi-information mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          Application Error
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Just now
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="mdi mdi-settings mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          Settings
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                          <i className="mdi mdi-account-box mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          New user registration
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          2 days ago
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                    id="messageDropdown"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-email-outline mx-0" />
                    <span className="count" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="messageDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Messages
                    </p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="images/danny.jpg"
                          alt="image"
                          className="profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">
                          David Grey
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item nav-profile dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                  >
                    <img src="images/danny.jpg" alt="profile" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <a className="dropdown-item">
                      <i className="mdi mdi-settings text-primary" />
                      Settings
                    </a>
                    <a className="dropdown-item" onClick={logout}>
                      <i className="mdi mdi-logout text-primary" />
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="horizontal-menu-toggle"
                onClick={toggleDropdownMenu}
              >
                <span className="mdi mdi-menu" />
              </button>
            </div>
          </div>
        </nav>
        <nav className="bottom-navbar" id="bottomNavbar">
          <div className="container">
            <ul className="nav page-navigation justify-content-around">
              <li className="nav-item mx-lg-2">
                <Link to={"/profile"} className="nav-link">
                  <i className="mdi mdi-account menu-icon" />
                  <span className="menu-title">Profile</span>
                </Link>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link" href="pages/widgets/widgets.html">
                  <i className="mdi mdi-file-find menu-icon" />
                  <span className="menu-title">Discover</span>
                </a>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link" href="pages/widgets/widgets.html">
                  <i className="mdi mdi-pencil-box-outline menu-icon" />
                  <span className="menu-title">My Proposals</span>
                </a>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link" href="pages/widgets/widgets.html">
                  <i className="mdi mdi-checkbox-multiple-marked menu-icon" />
                  <span className="menu-title">Approved Proposals</span>
                </a>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link" href="pages/widgets/widgets.html">
                  <i className="mdi mdi-bookmark menu-icon" />
                  <span className="menu-title">Bookmarks</span>
                </a>
              </li>
              <li className="nav-item mx-lg-2">
                <a className="nav-link" href="pages/widgets/widgets.html">
                  <i className="mdi mdi-plus-circle menu-icon" />
                  <span className="menu-title">Create Proposal</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default withRouter(TopBar);
