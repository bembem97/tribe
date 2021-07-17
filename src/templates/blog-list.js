import React from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import useStyles from "../styles/styles"
import SidePost from "../components/page-blog/side-post"

import Avatar from "@material-ui/core/Avatar"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CardActions from "@material-ui/core/CardActions"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import IconButton from "@material-ui/core/IconButton"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

const themeAvatar = createMuiTheme({
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: green[700],
      },
    },
  },
})

const BlogList = ({ data, pageContext }) => {
  const classes = useStyles()
  const mq = useMediaQuery("(max-width: 799px)")

  const { edges: posts } = data.allMdx
  const { currentPage, numPages } = pageContext
  const _slug = "/blog/"

  // todo *** NEXT/PREVIOUS BUTTON
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const next = _slug + (currentPage + 1).toString()
  const previous =
    currentPage - 1 === 1 ? _slug : _slug + (currentPage - 1).toString()

  // todo *** DISPLAY HOT POSTS LIST
  const blogPost = posts.map(({ node: post }) => (
    <React.Fragment key={post.id}>
      <Box mb={1}>
        <Card>
          <CardHeader
            title={post.frontmatter.title}
            subheader={post.frontmatter.date}
            avatar={<Avatar aria-label="Recipe">B</Avatar>}
          />

          <Link to={`${post.fields.slug}`}>
            <CardMedia
              image={post.frontmatter.embeddedImagesLocal[0].publicURL}
              className={classes.media}
              title={post.frontmatter.title}
            />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.excerpt}
              </Typography>
            </CardContent>
          </Link>

          <CardActions>
            <IconButton title="Favorite">
              <FavoriteIcon />
            </IconButton>

            <IconButton title="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </React.Fragment>
  ))

  return (
    <>
      <Layout title="Blog">
        <Link to="/articles">
          <Box mb={1} position="relative" overflow="hidden">
            <Paper>
              <StaticImage
                alt="Delicious Food"
                src="../images/cuisine.jpg"
                layout="constrained"
                className={classes.bannerImage}
                width={1024}
                height={325}
              />

              <Box clone py={2} className={classes.overlay}>
                <Container>
                  <Typography
                    variant="h3"
                    className={clsx(classes.headFont, classes.mainFont)}
                  >
                    Master Chef Bembem
                  </Typography>

                  <Typography
                    variant="h6"
                    className={clsx(classes.subFont, classes.mainFont)}
                  >
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </Typography>
                </Container>
              </Box>
            </Paper>
          </Box>
        </Link>

        <Grid container spacing={1}>
          <Grid item xs={mq ? 12 : 8}>
            <ThemeProvider theme={themeAvatar}>{blogPost}</ThemeProvider>
          </Grid>

          <Grid item xs={mq ? 12 : 4}>
            <SidePost />
          </Grid>

          <Grid item xs={mq ? 12 : 8}>
            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined" disabled={isFirst ? true : false}>
                {!isFirst && <Link to={previous}>Previous</Link>}
              </Button>

              <Button variant="outlined" disabled={isLast ? true : false}>
                {!isLast && <Link to={next}>Next</Link>}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "Do MMM YYYY")
            embeddedImagesLocal {
              publicURL
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
    }
  }
`

export default BlogList
