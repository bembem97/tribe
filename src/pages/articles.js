import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    marginBottom: "16px",
    padding: "2rem 0",
  },

  typo: {
    display: "flex",
    marginBottom: "1rem",
    alignItems: "center",

    "& > p": {
      fontWeight: 600,
    },
  },
})

const Articles = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "DD MMM YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.allMdx.edges.map(({ node }) => (
        <Link key={node.id} to={node.fields.slug}>
          <Paper component="article" className={classes.root}>
            <Container>
              <div className={classes.typo}>
                <Typography variant="body1">
                  {node.frontmatter.title} - {node.frontmatter.date}
                </Typography>
              </div>

              <div>
                <Typography>{node.excerpt}</Typography>
              </div>
            </Container>
          </Paper>
        </Link>
      ))}
    </Layout>
  )
}

export default Articles
