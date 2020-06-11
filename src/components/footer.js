import React from "react";

import SnsIcons from "../components/sns-icons";

const Footer = () => {
  return (
    <footer className="footer has-text-centered">
      <div className="content has-text-centered">
        <p>
          This page was build with{" "}
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a>.<br />
          And, hosted on <a href="https://www.netlify.com/">Netlify</a>.
        </p>
        <div className="container">
          <div className="column social">
            <SnsIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
