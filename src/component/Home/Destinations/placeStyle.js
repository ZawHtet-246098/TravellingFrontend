import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  media: {
    width: "260px",
    height: "200px",
    position: "relative",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "15px",
    height: "100%",
    fontFamily: "Gentium Book Plus",
  },
  restrictionBtn: {
    position: "absolute",
    bottom: "0",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
}));
