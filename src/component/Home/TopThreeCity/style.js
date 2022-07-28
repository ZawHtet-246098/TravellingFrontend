import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  popularCityMedia: {
    width: "385px",
    height: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      padding: "0",
    },
  },
  popularcitiesgrid: {
    margin: "1rem 0",
  },
  popularCityCardContent: {
    padding: "0",
  },
}));
