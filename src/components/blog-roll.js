import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./preview-compatible-image";
import TagButtons from "./tag-buttons";
import DispDate from "./disp-date";

class BlogRollPanels extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="contaier">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="box blog-roll" key={post.id}>
              <article>
                <div className="columns">
                  <div className="column">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <Link to={post.fields.slug}>
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Link>
                      </div>
                    ) : null}
                  </div>
                  <div className="column">
                  <Link to={post.fields.slug}>
                    <p className="title has-text-dark is-size-4 blog-roll-title">
                      
                        {post.frontmatter.title}
                      
                    </p>
                    </Link>
                    <p className="content is-small has-text-dark">
                      {post.excerpt}
                      <br />
                      <br />
                    </p>

                    <span className="subtitle is-6">
                      <DispDate date={post.frontmatter.date} />
                      &nbsp;
                      <TagButtons tags={post.frontmatter.tags} />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRollPanels.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const BlogRoll = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(truncate: true, pruneLength: 80)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "YYYY年M月D日")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollPanels data={data} count={count} />}
  />
);

export default BlogRoll;