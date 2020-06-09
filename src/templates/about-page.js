import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout-1-container";
import Content, { HTMLContent } from "../components/content";

import Timeline from "../components/timeline";
import SkillPanel from "../components/skill-panel";

import "../styles/style.scss";

export const AboutPageTemplate = ({
  title,
  timelineItems,
  skills,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* Profile section */}
      <section className="section is-odd-section">
        <div className="container has-text-centered">
          <h2 className="title is-1 is-spaced">Profile</h2>
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>

      {/* skill section */}
      <section className="section is-even-section">
        <div className="container has-text-centered">
          <h2 className="title is-1 is-spaced">Skill</h2>
        </div>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <SkillPanel skills={skills} />
          </div>
        </div>
      </section>

      {/* timeline section */}
      <section className="section is-odd-section">
        <div className="container has-text-centered">
          <h2 className="title is-1 is-spaced">Experience</h2>
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
        skills={post.frontmatter.skills}
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
        skills {
          category
          name
          level
          comment
        }
      }
    }
  }
`;
