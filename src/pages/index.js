import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    marginBottom: "3rem",
  },
})

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

          <Box p={3}>
            <ThirdComponent />
          </Box>
        </Paper>
      </Layout>
    </>
  )
}

// ** --- COMPONENT
const ThirdComponent = () => {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up("768"))
  const xs = useMediaQuery(theme.breakpoints.down("768"))
  const mq = md ? "6" : "12"
  const classes = useStyles()

  return (
    <>
      {/** // TODO --- ABCDEFGHIJKLMNOPQRSTUVWXYZ */}
      <Grid container spacing={3} className={classes.root}>
        <Box clone order={xs ? 0 : 2}>
          <Grid item xs={mq}>
            <StaticImage alt="pinoy food" src="../images/chopsuey.jpg" />
          </Grid>
        </Box>

        <Box clone>
          <Grid item xs={mq}>
            <Typography variant="h4" component="h4" align="center">
              Utan Bisaya
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              mb={3}
              mt={2}
            >
              <Typography variant="body2" component="h6">
                June 9, 2021&nbsp;/&nbsp;by Isabella
              </Typography>
            </Box>

            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tristique justo id elit bibendum pharetra non vitae lectus. Mauris
              libero felis, dapibus a ultrices sed, commodo vitae odio. Sed
              auctor tellus quis arcu tempus, egestas tincidunt augue
              pellentesque. Suspendisse vestibulum sem in eros maximus, pretium
              commodo turpis convallis. Aenean scelerisque orci quis urna
              tempus, vitae interdum velit aliquet.
            </Typography>

            <Box display="flex" justifyContent="center" mt={3}>
              <Link to="/blog-3/utan-bisaya/">
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </Link>
            </Box>
          </Grid>
        </Box>
      </Grid>

      {/** // TODO --- ABCDEFGHIJKLMNOPQRSTUVWXYZ */}
      <Grid container spacing={3} className={classes.root}>
        <Box clone order={1}>
          <Grid item xs={mq}>
            <StaticImage alt="pinoy food" src="../images/vege.jpg" />
          </Grid>
        </Box>

        <Box clone order={2}>
          <Grid item xs={mq}>
            <Typography variant="h4" component="h4" align="center">
              Utan Sari-sari
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              mb={3}
              mt={2}
            >
              <Typography variant="body2" component="h6">
                June 9, 2021&nbsp;/&nbsp;by Patricia
              </Typography>
            </Box>

            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tristique justo id elit bibendum pharetra non vitae lectus. Mauris
              libero felis, dapibus a ultrices sed, commodo vitae odio. Sed
              auctor tellus quis arcu tempus, egestas tincidunt augue
              pellentesque. Suspendisse vestibulum sem in eros maximus, pretium
              commodo turpis convallis. Aenean scelerisque orci quis urna
              tempus, vitae interdum velit aliquet.
            </Typography>

            <Box display="flex" justifyContent="center" mt={3}>
              <Link to="/blog-4/utan-sarisari/">
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </Link>
            </Box>
          </Grid>
        </Box>
      </Grid>

      {/** // TODO --- ABCDEFGHIJKLMNOPQRSTUVWXYZ */}
      <Grid container spacing={3}>
        <Box clone order={xs ? 0 : 2}>
          <Grid item xs={mq}>
            <StaticImage alt="pinoy food" src="../images/cuisine.jpg" />
          </Grid>
        </Box>

        <Box clone>
          <Grid item xs={mq}>
            <Typography variant="h4" component="h4" align="center">
              Isda Tinola
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              mb={3}
              mt={2}
            >
              <Typography variant="body2" component="h6">
                June 9, 2021&nbsp;/&nbsp;by Maria
              </Typography>
            </Box>

            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tristique justo id elit bibendum pharetra non vitae lectus. Mauris
              libero felis, dapibus a ultrices sed, commodo vitae odio. Sed
              auctor tellus quis arcu tempus, egestas tincidunt augue
              pellentesque. Suspendisse vestibulum sem in eros maximus, pretium
              commodo turpis convallis. Aenean scelerisque orci quis urna
              tempus, vitae interdum velit aliquet.
            </Typography>

            <Box display="flex" justifyContent="center" mt={3}>
              <Link to="/blog-5/isda-tinola/">
                <Button variant="contained" color="primary">
                  Read More
                </Button>
              </Link>
            </Box>
          </Grid>
        </Box>
      </Grid>
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
