import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

/**
 * 画像表示コンポーネント。
 * @param {*} param0
 */
const Image = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" }
  const { fileName = "", alt = "" } = imageInfo

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 800) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(fileName)
        })

        if (!image) return

        const imageSizes = image.node.childImageSharp.sizes
        return <Img style={imageStyle} sizes={imageSizes} alt={alt} />
      }}
    />
  )
}

Image.propTypes = {
  imageInfo: PropTypes.shape({
    path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    alt: PropTypes.string,
  }).isRequired,
}

export default Image