import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/styles"

import AboutMe from "./side-about"

const useStyles = makeStyles({
  list: {
    marginTop: "8px",

    "& > h5": {
      paddingTop: "1.1rem",
    },

    "& .static-image": {
      marginRight: "4px",
    },

    "& span": {
      color: "#111",
    },
  },
})

const SidePost = () => {
  const pagkaun = "../../images/sud-an-3.jpg"
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 3
        skip: 2
        sort: { order: ASC, fields: [slug, frontmatter___date] }
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // ? --- QUERY
  const _data = data.allMdx.edges.map(({ node }) => (
    <Fragment key={node.id}>
      <Divider />

      <Link to={`/blogs/${node.slug}`}>
        <ListItem button>
          <StaticImage
            src={pagkaun}
            alt="Pagkaun"
            width={70}
            className="static-image"
          />
          <ListItemText primary={node.frontmatter.title} />
        </ListItem>
      </Link>
    </Fragment>
  ))

  const classes = useStyles()
  return (
    <>
      <AboutMe />

      <Paper className={classes.list}>
        <Typography variant="h5" align="center">
          Popular Post
        </Typography>

        <List>{_data}</List>
      </Paper>
    </>
  )
}

export default SidePost
