import React from "react";
import Icon from "@mdi/react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { mdiAccountCircle, mdiLogout } from "@mdi/js";
import { mdiCloudSearch } from "@mdi/js";
import { mdiTextBoxPlus } from "@mdi/js";
import { mdiFileDocumentMultiple } from "@mdi/js";
import { mdiTextBoxCheck } from "@mdi/js";

export default function BottomNav() {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-around"
        style={{ borderTop: "1px solid rgb(110, 118, 125)" }}
      >
        <div className="my-1">
          <a>
            <Link to={"/home"}>
              <div
                className="sidebar-link d-inline-flex align-items-center"
                data-sidebar="bio-link"
              >
                <Icon path={mdiAccountCircle} size={1.2} />
              </div>
            </Link>
          </a>
        </div>

        <div className="my-1">
          <a>
            <Link to={"/discover"}>
              <div
                className="sidebar-link d-inline-flex align-items-center"
                data-sidebar="discover-link"
              >
                <Icon path={mdiCloudSearch} size={1.2} />
              </div>
            </Link>
          </a>
        </div>

        <div className="my-1">
          <a>
            <Link to={"/my-proposals"}>
              <div
                className="sidebar-link d-inline-flex align-items-center"
                data-sidebar="submit-proposal-link"
              >
                <Icon path={mdiTextBoxPlus} size={1.2} />
              </div>
            </Link>
          </a>
        </div>

        <div className="my-1">
          <a>
            <Link to={"/approved-proposals"}>
              <div
                className="sidebar-link d-inline-flex align-items-center"
                data-sidebar="my-proposals-link"
              >
                <Icon path={mdiFileDocumentMultiple} size={1.2} />
              </div>
            </Link>
          </a>
        </div>

        <div className="my-1">
          <a>
            <Link to={"/bookmarks"}>
              <div
                className="sidebar-link d-inline-flex align-items-center"
                data-sidebar="approved-proposals-link"
              >
                <Icon path={mdiTextBoxCheck} size={1.2} />
              </div>
            </Link>
          </a>
        </div>

        <div className="my-1" id="logoutButton">
          <a>
            <div
              className="sidebar-link d-inline-flex align-items-center"
              data-sidebar="logout-link"
            >
              <Icon path={mdiLogout} size={1.2} />
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}