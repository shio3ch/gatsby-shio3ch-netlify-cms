import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Navbar from "./navbar";
import Seo from "./seo";

const Layout = ({ children }) => {
  return (
    <div>
      <Seo />
      <div className="layout">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
