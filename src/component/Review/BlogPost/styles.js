import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blogPostWrapper: {
    width: "800px",
    minHeight: "610px",
    // border: "1px solid red",
    padding: "1rem",
    marginTop: "3rem",
    // background: "rgba(255,255,255,0.5)",
    // backdropFilter: "blur(5px)",
    // background: "white",
    fontFamily: "inherit",
    [theme.breakpoints.down("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
    },
  },
  postCard: {
    display: "flex",
    padding: "1rem",
    border: "1px solid",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  postContant: {
    width: "70%",
    padding: "0 2rem",
    fontFamily: "inherit",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0",
    },
  },
  postMedia: {
    width: "300px",
    maxHeight: "235px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "200px",
    },
  },
  postUser: {
    display: "flex",
    alignItems: "center",
  },
}));
