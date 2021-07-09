import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { blue, green } from "@material-ui/core/colors"

const About = () => {
  return (
    <Layout title="About us">
      <Paper>
        <Box p={3}>
          <Typography variant="h3">About</Typography>

          <hr className="hr" />

          <Box mb={3}>
            <StaticImage src="../images/foody.jpg" alt="wf" />
          </Box>

          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expressa
            vero in iis aetatibus, quae iam confirmatae sunt. At, si voluptas
            esset ato, physicum se voluit.
          </Typography>

          <Typography variant="body1" paragraph>
            Honesta oratio, Socratica, Platonis etiam. Ergo illi intellegunt
            quid Epicurus dicat, ego non intellego? Maximas vero virtutes iacere
            omnis necesse est voluptate dominante. At multis malis affectus. Non
            minor, inquit, voluptas percipitur ex vilissimis rebus quam ex
            pretiosissimis. Bonum integritas corporis: misera debilitas.
          </Typography>

          <Typography variant="body1" paragraph>
            Aedibus totumque timuere senex Argentea corpore Et tanti ficti non
            removente lenimen Crete vestigia in deus, Olenios velut. Agna
            fulget, gratia habitant fonti pignus. Cura modo sacra petatur non
            adligat placebant sic discubuere tamen caelestibus pendebat.
          </Typography>
        </Box>

        {/* //TODO --- ANOTHER COMPONENT  */}
        <SecondComponent />
      </Paper>
    </Layout>
  )
}

const useStyles = makeStyles({
  background: {
    backgroundColor: blue[50],
    padding: "2rem",
    borderLeft: `3px solid ${green[700]}`,

    "& li": {
      padding: "10px 0",
    },
  },

  listTitle: {
    marginBottom: "2rem",
  },
})

const SecondComponent = () => {
  const theme = useTheme()
  const classes = useStyles()

  const sm = useMediaQuery(theme.breakpoints.up("sm"))
  const md = useMediaQuery(theme.breakpoints.up("md"))
  const mq = md ? "h4" : sm ? "h5" : "h6"

  const lorem = [
    "At multis malis affectus. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis.",
    "At multis malis affectus. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis.",
    "At multis malis affectus. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis.",
    "At multis malis affectus. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis.",
    "At multis malis affectus. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis.",
  ].map((ipsum, i) => (
    <li key={i}>
      <Typography variant="body1" className="list">
        {ipsum}
      </Typography>
    </li>
  ))

  return (
    <>
      <Box pb={2}>
        <Container>
          <Paper className={classes.background}>
            <Typography variant={mq} className={classes.listTitle}>
              Aedibus totumque timuere
            </Typography>

            <ol>{lorem}</ol>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default About
