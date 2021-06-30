import { makeStyles } from "@material-ui/core/styles"
import { red, green } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  bgLight: {
    backgroundColor: "#f8f9fa",
  },

  transparent: {
    backgroundColor: "transparent",
  },

  avatar: {
    backgroundColor: red[500],
  },

  media: {
    height: 0,
    paddingTop: "56.25%",
  },

  asideImage: {
    marginBottom: "8px",
  },

  // ** BLOG BANNER -----
  overlay: {
    backgroundColor: "rgba(17, 19, 21, 0.35)",
    position: "absolute",
    inset: 0,
  },

  bannerImage: {
    [theme.breakpoints.between("425", "600")]: {
      height: "calc(50vw + 25px)",
    },

    [theme.breakpoints.between("300", "425")]: {
      height: "350px",
    },

    [theme.breakpoints.between("xs", "299")]: {
      height: "405px",
    },
  },

  // ** FONTS -----
  mainFont: {
    color: green[50],
    fontWeight: 600,
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  },

  headFont: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },

    [theme.breakpoints.between("xs", "768")]: {
      fontSize: "1.75em!important",
    },
  },

  subFont: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em!important",
    },
  },

  subFont2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".75em!important",
    },
  },
}))

export default useStyles
