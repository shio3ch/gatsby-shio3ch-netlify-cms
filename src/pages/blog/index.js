import React from "react";

import Layout from "../../components/layout-2-container";
import BlogRoll from "../../components/blog-roll";
import ProfileTile from "../../components/profile-tile";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout
        mainContent={
          <div>
            <section>
              <BlogRoll />
            </section>
          </div>
        }
        subContent={<ProfileTile />}
      />
    );
  }
}
