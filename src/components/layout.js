import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

const theme = createMuiTheme({
   overrides: {
      MuiCssBaseline: {
         "@global": {
            body: {
               backgroundColor: "#eee",
            },

            hr: {
               "&.hr": {
                  width: "35%",
                  borderTop: `2px solid ${green[700]}`,
                  margin: "2.35rem 0",
               },
            },
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

const Layout = ({ children, title }) => {
   const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               title
            }
         }
      }
   `)

   return (
      <>
         <Helmet>
            <title>
               {title || "Page"} - {data.site.siteMetadata.title}
            </title>
         </Helmet>

         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Container maxWidth="md">{children}</Container>
            <Footer />
         </ThemeProvider>
      </>
   )
}

export default Layout
