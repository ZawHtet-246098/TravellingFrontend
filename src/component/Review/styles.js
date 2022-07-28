import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  reviewContainer: {
    // background: "url(https://wallpaperaccess.com/full/3469095.jpg)",
    // backgroundSize: "cover",
    background: "rgb(240,242,245)",
    width: "100vw",
    // height: "100vh !important",
    fontFamily: "inherit",
  },
  warningContainer: {
    background: "darkred",
    marginTop: "2.8rem",
    color: "white",
    padding: ".5rem 0",
    paddingLeft: "1rem",
  },
  blogWraper: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
}));
