import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout-2-container";
import ProfileTile from "../components/profile-tile";
import PreviewCompatibleImage from "../components/preview-compatible-image";
import Content, { HTMLContent } from "../components/content";
import TagButtons from "../components/tag-buttons";
import DispDate from "../components/disp-date";

import "../styles/style.scss";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  featuredimage,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <section>
        {helmet || ""}
        <div className="box">
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <div style={{ "margin-top": "1em", "margin-bottom": "1em" }}>
                  <span>
                    <p className="subtitle is-6">
                      <DispDate date={date} />
                      &nbsp;
                      <TagButtons tags={tags} />
                    </p>
                  </span>
                </div>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`,
                  }}
                />

                <article
                  className="message is-dark"
                  style={{ "margin-top": "2em", "margin-bottom": "4em" }}
                >
                  <div className="message-body">
                    <p className="content is-small">{description}</p>
                  </div>
                </article>

                <PostContent content={content} />

                <div style={{ "margin-top": "5em", "margin-bottom": "1em" }}>
                  <span>
                    <p className="content is-small">
                      カテゴリー：
                      <TagButtons tags={tags} />
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
      mainContent={
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          featuredimage={post.frontmatter.featuredimage}
        />
      }
      subContent={<ProfileTile />}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY年M月D日")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`;
