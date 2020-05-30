import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Navbar from "./navbar";
import Seo from "./seo";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <Seo />
      </Helmet>
      <div className="layout">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
