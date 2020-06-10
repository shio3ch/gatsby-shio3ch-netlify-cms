import React from "react";
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

export default Layout;
