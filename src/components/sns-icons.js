import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import useSiteMetadata from "../hooks/use-site-metadata";

const SnsIcons = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <span className="sns-icon">
      <a title="twitter" href={siteMetadata.social.twitter} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
      </a>
      <a title="facebook" href={siteMetadata.social.facebook} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
      </a>
      <a title="instagram" href={siteMetadata.social.instagram} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
      </a>
      <a title="github" href={siteMetadata.social.github} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
      </a>
    </span>
  );
};

export default SnsIcons;
