import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"

import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Box from "@material-ui/core/Box"
import MenuItem from "@material-ui/core/MenuItem"

import { makeStyles } from "@material-ui/core/styles"

// ?? --- MATERIAL UI STYLING
const useStyles = makeStyles((theme) => ({
  headerFont: {
    fontWeight: "600",
    color: "#eee",
  },

  noPaddingX: {
    paddingLeft: "0",
    paddingRight: "0",
  },

  noPaddingY: {
    paddingTop: "0",
    paddingBottom: "0",
  },

  link: {
    display: "inline-block",
    padding: "8px 0",
    textAlign: "center",
    width: "75px",

    [theme.breakpoints.down("350")]: {
      fontSize: "12px",
      width: "50px",
    },
  },

  menuLink: {
    justifyContent: "flex-end",
    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("sm")]: {},

    "& li": {
      [theme.breakpoints.down("350")]: {
        flexGrow: 1,
      },
    },
  },
}))

// TODO **
const Header = () => {
  const classes = useStyles()

  return (
    <Box boxShadow={1} mb={3} clone>
      <AppBar position="static">
        <Container maxWidth="md">
          <ToolBar
            component="ul"
            className={clsx(classes.noPaddingX, classes.menuLink)}
          >
            <MenuLink />
          </ToolBar>
        </Container>
      </AppBar>
    </Box>
  )
}

// TODO ** Menu Link List
const MenuLink = () => {
  const activeStyle = { color: "#111", borderBottom: "2px solid #eee" }
  const classes = useStyles()
  const links = [
    { slug: "/", name: "Home", activeLink: "active" },
    { slug: "/about", name: "About", activeLink: "" },
    { slug: "/blog", name: "Blog", activeLink: "" },
    { slug: "/contact", name: "Contact", activeLink: "" },
  ]

  const link = links.map((l, i) => (
    <MenuItem key={i} className={classes.noPaddingX}>
      <Link
        to={l.slug}
        className={clsx(classes.headerFont, classes.link)}
        activeClassName={l.activeLink}
        activeStyle={activeStyle}
      >
        {l.name}
      </Link>
    </MenuItem>
  ))

  return <>{link}</>
}

export default Header
