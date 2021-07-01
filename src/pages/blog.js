import React from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import useStyles from "../styles/styles"
import HotPost from "../components/page-blog/hot-post"
import SidePost from "../components/page-blog/side-post"

import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Blog = () => {
  const classes = useStyles()
  const mq = useMediaQuery("(max-width: 799px)")

  return (
    <>
      <Layout title="Blog">
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
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </Typography>
              </Container>
            </Box>
          </Paper>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={mq ? 12 : 8}>
            <HotPost />
          </Grid>

          <Grid item xs={mq ? 12 : 4}>
            <SidePost />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default Blog
