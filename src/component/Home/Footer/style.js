import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footerContainer: {
    background: "gray",
    paddingTop: "1rem",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      backgroundSize: "contain",
    },
    background:
      "url(https://flyoclub.com/wp-content/uploads/2020/03/flight-bg.jpg)",
  },
}));
