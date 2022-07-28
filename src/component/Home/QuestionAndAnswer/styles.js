import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  singlebox: {
    width: "600px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    // border: "1px solid red",
  },
  questioncontainer: {
    paddingBottom: "2rem",
  },
}));
