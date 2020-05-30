import React, { Component } from "react";
import { Link } from "gatsby";

import useSiteMetadata from "../hooks/use-site-metadata";

const TitleLogo = () => {
  const { title } = useSiteMetadata();
  return (
    <div>
      <Link to="/" title="shioch.net">
        <span>
          <p className="title-logo">{title}</p>
        </span>
      </Link>
    </div>
  );
};

export default TitleLogo;
