import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  homewrapper: {
    top: 0,
    width: "100vw",
  },
  homeLeading: {
    position: "relative",
    height: "90vh",
    backgroundImage:
      "url(https://www.outdoorrevival.com/wp-content/uploads/sites/59/2017/01/banana-trees-1850882_1280.jpg)",
    // "url(./public/logo19)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  hometypo: {
    paddingTop: "9rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  homeleadingtypotwo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      paddingBottom: "1.8rem",
    },
  },
  homeTextField: {
    border: "2px solid darkblue !important",
    // borderColor: "blue !important",
    // outline: "blue !important",
    color: "white !important",
    // background: "gray",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90% !important",
      margin: theme.spacing(1),
    },
  },
  homeSelectCountryInput: {
    [theme.breakpoints.down("xs")]: {
      width: "90% !important",
      margin: theme.spacing(1),
    },
  },
  homepageForm: {
    marginTop: "5rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      // display: "flex",
      // flexDirection: "column",
      display: "none",
    },
  },
  homeSearchBtn: {
    border: "2px solid darkblue !important",
    padding: "13px 18px",
    color: "white",
    fontSize: "20px",
    background: "gray",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      margin: theme.spacing(1),
      // display: "none",
    },
  },
  logosTag: {
    // width: "100%",
    height: "60px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
      // display: "none",
    },
    // position: "absolute",
    // bottom: 0,
  },
  warningContainer: {
    background: "darkred",
    marginTop: "2.8rem",
    color: "white",
    padding: ".5rem 0",
    paddingLeft: "1rem",
  },
}));
