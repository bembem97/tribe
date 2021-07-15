import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  subheader: {
    "& h6": {
      padding: `${theme.spacing(0.15)}px ${theme.spacing(2)}px`,
    },

    "& h6:first-of-type": {
      borderRight: `2px solid ${green[700]}`,
    },
  },

  contentStyle: {
    "& *": {
      marginBottom: theme.spacing(2),
    },
  },
}))

const shortcodes = { GatsbyImage, Button } // Provide common components here

const Article = ({ data: { mdx }, pageContext }) => {
  const { next, previous } = pageContext
  const classes = useStyles()
  const _image = getImage(mdx.frontmatter.embeddedImagesLocal[0])

  return (
    <Layout title={mdx.frontmatter.title}>
      <Typography variant="h4" component="h1" paragraph align="center">
        {mdx.frontmatter.title}
      </Typography>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        className={classes.subheader}
      >
        <Typography variant="body2" component="h6" paragraph>
          {mdx.frontmatter.date}
        </Typography>

        <Typography variant="body2" component="h6" paragraph>
          <span>written by</span> {mdx.frontmatter.author}
        </Typography>
      </Box>

      <div className={classes.contentStyle}>
        <GatsbyImage image={_image} alt={mdx.frontmatter.title} />

        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter} getImage={getImage}>
            {mdx.body}
          </MDXRenderer>
        </MDXProvider>
      </div>

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
        date(formatString: "MMMM DD, YYYY")
        author
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
export default Article
