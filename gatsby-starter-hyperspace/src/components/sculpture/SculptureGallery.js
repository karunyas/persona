import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Typography from "@material-ui/core/Typography"

import ImageGallery from "@browniebroke/gatsby-image-gallery"

export default function SculptureGallery({ data }) {
  const images = data.images.edges.map(({ node }) => node.childImageSharp)

  return (
      <div>
      <Typography variant="h3">Welcome to the photo gallery!</Typography>
      <ImageGallery images={images} />
      </div>
  )
 }

export const imagesQuery = graphql`
  query ImagesForGallery {
    images: allFile(filter: { sourceInstanceName: { in: "src/images/gallery" } }, sort: { fields: name }) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
 `