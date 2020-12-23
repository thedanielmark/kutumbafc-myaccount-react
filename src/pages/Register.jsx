import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./Layout";
import MainContent from "./components/Register/MainContent";

export default class Register extends Component {
  render() {
    return (
      <HelmetProvider>
        <Layout>
          <Helmet>
            <title>Register | KuTumba FC</title>
          </Helmet>
          <MainContent></MainContent>
        </Layout>
      </HelmetProvider>
    );
  }
}