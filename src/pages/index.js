import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

const Index = () => {
  return (
    <>
      <Layout title="Home">
        <Box p={3}>
          <Welcome />
        </Box>

        <Paper>
          <Box p={3}>
            <SecondComponent />
          </Box>
        </Paper>
      </Layout>
    </>
  )
}

// ** --- COMPONENT
const SecondComponent = () => {
  const theme = useTheme()

  const sm = useMediaQuery(theme.breakpoints.up("sm"))
  const md = useMediaQuery(theme.breakpoints.up("md"))
  const mq = md ? "h3" : sm ? "h4" : "h5"

  return (
    <>
      <Typography variant={mq} paragraph>
        Lorem ipsum
      </Typography>

      <Typography variant="body1" paragraph>
        Adit suo ait in olorinis portitor undam tangentia quibus Hectora
        invideatis cardine pressit fovet, fuit; nec barba sudantibus? Forte
        aliquis, ultaque et is inritamen velamina Clarium: non. Inter pendentia
        eligit, sua fugam cumque. Domat ex nomina rogantum genitas delapsam: iam
        quae capillos facienda lanificae tectus solidorum. Seraque Medea, et
        exstinctique et conata Cumarum species ultra re cognita!
      </Typography>

      <Typography variant={mq} paragraph>
        Mauris rhoncus aenean vel elit
      </Typography>

      <Typography variant="body1">
        Mauris rhoncus aenean vel elit. Pharetra et ultrices neque ornare aenean
        euismod elementum. Dignissim enim sit amet venenatis urna cursus eget
        nunc scelerisque. Malesuada nunc vel risus commodo viverra maecenas
        accumsan. Pellentesque massa placerat duis ultricies lacus sed turpis
        tincidunt id. Venenatis a condimentum vitae sapien pellentesque.
        Maecenas accumsan lacus vel facilisis volutpat.
      </Typography>
    </>
  )
}

// ** --- COMPONENT
const Welcome = () => {
  const theme = useTheme()

  const sm = useMediaQuery(theme.breakpoints.up("sm"))
  const md = useMediaQuery(theme.breakpoints.up("md"))
  const mq = md ? "h3" : sm ? "h4" : "h5"

  return (
    <>
      <Typography variant={mq} paragraph>
        Bembem Cabrera
      </Typography>

      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Grid container spacing={3}>
        <Grid item>
          <Link to="/blog">
            <Button variant="contained" color="primary">
              Read the blog &#8594;
            </Button>
          </Link>
        </Grid>

        <Grid item>
          <Link to="/contact">
            <Button variant="outlined">Contact me</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default Index
