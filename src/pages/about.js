import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const About = () => {
   return (
      <Layout title="About us">
         <Paper>
            <Box p={3}>
               <Typography variant="h3">About</Typography>
               <hr className="hr" />

               <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Expressa vero in iis aetatibus, quae iam confirmatae sunt. At,
                  si voluptas esset ato, physicum se voluit.
               </Typography>

               <Box mb={3}>
                  <StaticImage src="../images/wf-design.jpg" alt="wf" />
               </Box>

               <Typography variant="body1" paragraph>
                  Honesta oratio, Socratica, Platonis etiam. Ergo illi
                  intellegunt quid Epicurus dicat, ego non intellego? Maximas
                  vero virtutes iacere omnis necesse est voluptate dominante. At
                  multis malis affectus. Non minor, inquit, voluptas percipitur
                  ex vilissimis rebus quam ex pretiosissimis. Bonum integritas
                  corporis: misera debilitas.
               </Typography>

               <Typography variant="body1" paragraph>
                  Aedibus totumque timuere senex Argentea corpore Et tanti ficti
                  non removente lenimen Crete vestigia in deus, Olenios velut.
                  Agna fulget, gratia habitant fonti pignus. Cura modo sacra
                  petatur non adligat placebant sic discubuere tamen caelestibus
                  pendebat.
               </Typography>
            </Box>
         </Paper>
      </Layout>
   )
}

export default About
