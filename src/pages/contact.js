import React from "react"
import Layout from "../components/layout"

import useStyles from "../styles/styles"

import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"

import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import WebIcon from "@material-ui/icons/Web"

import { makeStyles } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"

const contactStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 2.3rem",
  },

  myAvatar: {
    color: green[600],
  },
}))

const Contact = () => {
  const classes = contactStyles()

  return (
    <>
      <Layout title="Contact">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7}>
            <Paper>
              <Container className={classes.root}>
                <Forms />
              </Container>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={5}>
            <InfoDetails />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

// todo- LEFT FORM FIELD -----
const Forms = () => {
  const mt = { marginTop: "10px" }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <TextField label="Name" variant="outlined" fullWidth size="small" />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          size="small"
        />
      </Grid>

      <Grid item xs={12} style={mt}>
        <TextField label="Subject" variant="outlined" fullWidth size="small" />
      </Grid>

      <Grid item xs={12} style={mt}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={6}
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Send message
        </Button>
      </Grid>
    </Grid>
  )
}

// todo- RIGHT FORM FIELD -----
const InfoDetails = () => {
  const classes = useStyles()
  const contactClass = contactStyles()

  const infoDetails = [
    {
      icon: <RoomIcon />,
      attr: "Address",
      name: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    { icon: <PhoneIcon />, attr: "Phone", name: "+ 1235 2355 98" },
    { icon: <EmailIcon />, attr: "Email", name: "info@yoursite.com" },
    { icon: <WebIcon />, attr: "Website", name: "yoursite.com" },
  ].map((id, i) => (
    <React.Fragment key={i}>
      <Grid item xs={12} style={{ marginBottom: ".85rem" }}>
        <Box display="flex" flexDirection="row" alignItems="center" px={2}>
          <Avatar className={contactClass.myAvatar}>{id.icon}</Avatar>

          <Typography variant="body1" style={{ paddingLeft: "5px" }}>
            {id.attr}: <span className={classes.subFont2}>{id.name}</span>
          </Typography>
        </Box>
      </Grid>
    </React.Fragment>
  ))

  return (
    <>
      <Typography variant="h3" className={classes.headFont}></Typography>

      <Paper>
        <Box py={4}>
          <Grid container>{infoDetails}</Grid>
        </Box>
      </Paper>
    </>
  )
}

export default Contact
