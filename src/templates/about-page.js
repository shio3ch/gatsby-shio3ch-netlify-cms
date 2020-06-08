import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout-1-container";
import Content, { HTMLContent } from "../components/content";

import Timeline from "../components/timeline";

import "../styles/style.scss";

export const AboutPageTemplate = ({
  title,
  timelineItems,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* Hero section */}
      <section class="hero is-large is-dark">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-1 is-spaced">{title}</h1>
            {/*<span class="subtitle is-4">{subheading}</span>*/}
          </div>
        </div>
      </section>

      {/* Profile section */}
      <section className="section is-odd-section">
        <div className="container has-text-centered">
          <h2 className="title is-2">Profile</h2>
        </div>
        <div className="container has-text-centered">
          <span>
            SHIO3CH
            <br />
            お菓子大好き
            <PageContent className="content" content={content} />
          </span>
        </div>
      </section>

      {/* timeline section */}
      <section className="section is-even-section">
        <div className="container has-text-centered">
          <h2 className="title is-2">Work</h2>
        </div>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Timeline timelineItems={timelineItems} />
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  timelineItems: PropTypes.any,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        timelineItems={post.frontmatter.timelineItems}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        timelineItems {
          period
          job
          skills
          details
          img
          marker
          markerIcon
        }
      }
    }
  }
`;
