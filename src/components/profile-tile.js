import React from "react";
import { Link } from "gatsby";

import Image from "./image";
import SnsIcons from "./sns-icons";

import useSiteMetadata from "../hooks/use-site-metadata";

/**
 * プロフィールを表示するコンポーネント。
 */
const ProfileTile = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <div className="profile-tile">
      <div className="tile box">
        <div className="container has-text-centered">
          <Link to="/about">
            <Image imageInfo={{ fileName: "shio3ch_icon_21.png" }} />
          </Link>
          <Link className="profile-tile-link" to="/about">
            <p className="title is-4">{siteMetadata.profile.name}</p>
          </Link>
          <p className="content is-mideum">{siteMetadata.profile.comment}</p>
          <SnsIcons />
        </div>
      </div>
    </div>
  );
};

export default ProfileTile;
