import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MainContent from "./components/Error/MainContent";

export default class Error404 extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Error 404 | Pattarai</title>
          </Helmet>
          <MainContent></MainContent>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}