import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

const shortcodes = { GatsbyImage, Button } // Provide common components here

const Articles = ({ data: { mdx }, pageContext }) => {
  const { next, previous } = pageContext

  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>

      <MDXProvider components={shortcodes}>
        <MDXRenderer
          frontmatter={mdx.frontmatter}
          localImage={mdx.frontmatter.embeddedImagesLocal}
          getImage={getImage}
        >
          {mdx.body}
        </MDXRenderer>
      </MDXProvider>

      <Box display="flex" justifyContent="space-between">
        <Button variant="outlined" disabled={!previous ? true : false}>
          {previous && <Link to={previous.fields.slug}>Previous</Link>}
        </Button>

        <Button variant="outlined" disabled={!next ? true : false}>
          {next && <Link to={next.fields.slug}>Next</Link>}
        </Button>
      </Box>
    </Layout>
  )
}

export const articleQuery = graphql`
  query articleQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
export default Articles
