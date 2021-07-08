import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const padVal = "8px"
const useStyles = makeStyles({
  paddingY: {
    paddingTop: padVal,
    paddingBottom: padVal,
  },

  centerBox: {
    margin: "auto",
    display: "block",
  },
})

const AboutMe = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mq = useMediaQuery(theme.breakpoints.between("510", "799"))

  return (
    <>
      <Card>
        <Grid container>
          <Grid item xs={mq ? 4 : 12}>
            <StaticImage
              src="../../images/avatar.png"
              alt="My avatar"
              className={classes.centerBox}
            />
          </Grid>

          <Grid item xs={mq ? 8 : 12}>
            <CardHeader title="About me" className={classes.paddingY} />

            <CardContent className={classes.paddingY}>
              <Typography variant="body2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default AboutMe
