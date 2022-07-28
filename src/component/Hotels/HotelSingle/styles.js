import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  singleWholeHotelWrapper: {
    background: "#F6F4F3",
  },
  singleHotelWrapper: {
    paddingTop: "3rem",
    width: "100vw",
    // border: "1px solid black",
    // background: "#rgb(246,244,243)",
    background: "white",

    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "1200px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  roomFeatureStyle: {
    fontSize: "1rem",
    marginBottom: "0",
    display: "flex",
    alignItem: "center",
  },
  featureIcon: {
    marginRight: ".5rem",
  },
  smallRadioButton: {
    "& svg": {
      width: ".9em",
      height: ".9em",
    },
    "& p": {
      margin: "0",
    },
  },
  similarNearby: {
    fontWeight: "bold",
    marginTop: "1rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: "4rem",
    },
  },
}));
