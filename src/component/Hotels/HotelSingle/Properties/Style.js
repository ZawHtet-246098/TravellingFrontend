import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  hotelProperties: {
    // border: "1px solid darkblue",
    background: "white",
    marginBottom: ".5rem",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      margin: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "1rem",
      marginTop: "1rem",
      width: "1200px",
      margin: "auto",
    },
  },
  hotelPropertiesTitle: {
    fontWeight: "bold",
    fontFamily: "inherit",
    // border: "1px solid pink",
  },
  singleProperty: {
    // border: "1px solid red",
    marginBottom: "1rem",
  },
  singlePropertyTitle: {
    marginBottom: "5px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  singlePropertyIcon: {
    // marginRight: "1rem",
    width: "50px",
    // border: "1px solid green",
  },
  detailProperty: {
    marginLeft: "50px",
    fontSize: "1rem",
    marginBottom: "0",
  },
}));
