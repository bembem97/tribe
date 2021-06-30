import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"

import useStyles from "../styles/styles"

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

const SecondComponent = () => {
   const classes = useStyles()

   return (
      <>
         <Typography variant="h3" paragraph className={classes.headFont}>
            Lorem ipsum
         </Typography>

         <Typography variant="body1" paragraph>
            Adit suo ait in olorinis portitor undam tangentia quibus Hectora
            invideatis cardine pressit fovet, fuit; nec barba sudantibus? Forte
            aliquis, ultaque et is inritamen velamina Clarium: non. Inter
            pendentia eligit, sua fugam cumque. Domat ex nomina rogantum genitas
            delapsam: iam quae capillos facienda lanificae tectus solidorum.
            Seraque Medea, et exstinctique et conata Cumarum species ultra re
            cognita!
         </Typography>

         <Typography variant="h3" paragraph className={classes.headFont}>
            Mauris rhoncus aenean vel elit
         </Typography>

         <Typography variant="body1">
            Mauris rhoncus aenean vel elit. Pharetra et ultrices neque ornare
            aenean euismod elementum. Dignissim enim sit amet venenatis urna
            cursus eget nunc scelerisque. Malesuada nunc vel risus commodo
            viverra maecenas accumsan. Pellentesque massa placerat duis
            ultricies lacus sed turpis tincidunt id. Venenatis a condimentum
            vitae sapien pellentesque. Maecenas accumsan lacus vel facilisis
            volutpat.
         </Typography>
      </>
   )
}

const Welcome = () => {
   const classes = useStyles()

   return (
      <>
         <Typography variant="h3" paragraph className={classes.headFont}>
            Bembem Cabrera
         </Typography>

         <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
