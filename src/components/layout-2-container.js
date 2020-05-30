import React from "react";
import PropTypes from "prop-types";

import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

/**
 * 左にメインコンテンツ、右にサブコンテンツを持つレイアウトコンポーネント。
 */
const Layout2Container = ({mainContent, subContent}) => {

  return (
    <div>
      <Seo />
      <Navbar />

      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-three-quarters">
                {mainContent}
              </div>
              <div className="column">{subContent}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Layout2Container.propTypes = {
  mainContent: PropTypes.element.isRequired,
  subContent: PropTypes.element.isRequired,
};

export default Layout2Container;
