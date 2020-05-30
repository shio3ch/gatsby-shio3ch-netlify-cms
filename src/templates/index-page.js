import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout-2-container";
//import Features from "../components/Features";
import BlogRoll from "../components/blog-roll";
import ProfileTile from "../components/profile-tile";

import "../styles/style.scss";

export const IndexPageTemplate = ({ title, subheading }) => (
  <div>
    <section>
      <BlogRoll />
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      mainContent={IndexPageTemplate({title:frontmatter.title,subheading:frontmatter.subheading})}
      subContent={<ProfileTile />}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
      }
    }
  }
`;
