import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "./layout"

import Paper from "@material-ui/core/Paper"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import { green } from "@material-ui/core/colors"
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles"

const theme = createMuiTheme({
  overrides: {
    MuiCardMedia: {
      root: {
        minHeight: "475px",
      },
    },

    MuiTypography: {
      h6: {
        marginTop: "1rem",
        marginBottom: "1.5rem",
      },
    },
  },

  palette: {
    primary: {
      main: green[700],
      light: "#000",
      dark: green[900],
      contrastText: "#fff",
    },
  },
})

const useStyles = makeStyles((theme) => ({
  page: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    "& p": {
      margin: `${theme.spacing(3)}px 0`,
    },
  },
}))

const shortcodes = { Typography, CardMedia }
const Blog = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <MDXProvider components={shortcodes}>
          <ThemeProvider theme={theme}>
            <Paper>
              <Container className={classes.page}>{children}</Container>
            </Paper>
          </ThemeProvider>
        </MDXProvider>
      </Layout>
    </>
  )
}

export default Blog
