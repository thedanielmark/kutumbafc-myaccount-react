import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";

import MainContent from "./components/VerifyAccount/MainContent";

export default class VerifyAccount extends Component {
  render() {
    return (
      <HelmetProvider>
        <Layout>
          <Helmet>
            <title>Verify Account | Elevate</title>
          </Helmet>
          <MainContent></MainContent>
        </Layout>
      </HelmetProvider>
    );
  }
}