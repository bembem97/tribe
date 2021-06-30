import React from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import useStyles from "../styles/styles"
import HotPost from "../components/page-blog/hot-post"

import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"

import { makeStyles } from "@material-ui/core/styles"

const blogStyles = makeStyles({
  listItem: {
    alignItems: "flex-start",

    "& .MuiListItemText-root": {
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: "5px",
    },
  },
})

const Blog = () => {
  const classes = useStyles()

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
          <Grid item xs={12} sm={8}>
            <HotPost />
          </Grid>

          <Grid item xs={12} sm={4}>
            <RightSide />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

// ** SIDE CONTENT -----
const RightSide = () => {
  const blog = blogStyles()
  const imageSrc = "../images/sud-an-3.jpg"

  const popularPost = [1, 2, 3].map((pp) => (
    <React.Fragment key={pp}>
      <Divider />

      <Box clone px={1}>
        <ListItem className={blog.listItem}>
          <StaticImage src={imageSrc} width={75} alt="Food-pagkaun" />
          <ListItemText primary="Lami syang sud-ana. Lami" />
        </ListItem>
      </Box>
    </React.Fragment>
  ))

  return (
    <>
      <Box mb={1}>
        <Card>
          <Box display="flex" justifyContent="center">
            <StaticImage src="../images/avatar.png" alt="My avatar" />
          </Box>

          <Container>
            <CardHeader title="About me" style={{ paddingBottom: "0px" }} />

            <CardContent style={{ paddingTop: "8px" }}>
              <Typography variant="body2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Typography>
            </CardContent>
          </Container>
        </Card>
      </Box>

      <Card>
        <CardHeader title="Popular Post" />
        <List>{popularPost}</List>
      </Card>
    </>
  )
}

export default Blog
