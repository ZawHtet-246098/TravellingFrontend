import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cardMedia: {
    padding: "0 1rem",

    width: "500px",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "0.3rem 1rem",
    },
  },
  // hotelWrapper: {
  //   border: "1px solid darkblue",
  // },
  hotelCard: {
    maxWidth: "800px",
    height: "auto",
    border: "1px solid darkblue",
    display: "flex",
    justifyContent: "center",
    margin: "1rem",
    [theme.breakpoints.down(1020)]: {
      width: "90%",
      display: "flex",
      justifyContent: "center",
      // flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      width: "93vw",
      flexDirection: "column",
      justifyContent: "center",
      border: "none",
    },
  },
}));
