import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Box from "@material-ui/core/Box"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

import sudan2 from "../../images/sud-an-2.jpg"
import useStyles from "../../styles/styles"

const themeAvatar = createMuiTheme({
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: green[700],
      },
    },
  },
})

const HotPost = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 2
        sort: { order: ASC, fields: [slug, frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt
            slug
            frontmatter {
              title
              date(formatString: "Do MMM YYYY")
            }
          }
        }
      }
    }
  `)

  const blogPost = data.allMdx.edges.map(({ node }) => {
    return (
      <Fragment key={node.id}>
        <Box mb={1}>
          <Card>
            <CardHeader
              title={node.frontmatter.title}
              subheader={node.frontmatter.date}
              avatar={<Avatar aria-label="Recipe">B</Avatar>}
            />

            <Link to={`/blogs/${node.slug}`}>
              <CardMedia
                image={sudan2}
                className={classes.media}
                title={node.frontmatter.title}
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {node.excerpt}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Box>
      </Fragment>
    )
  })

  return <ThemeProvider theme={themeAvatar}>{blogPost}</ThemeProvider>
}

export default HotPost
