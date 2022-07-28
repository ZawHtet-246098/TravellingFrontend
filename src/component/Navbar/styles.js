import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appbar: {
    padding: 0,
    position: "absolute",
    top: 0,
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",

    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  navFirstPart: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: "500px",
      justifyContent: "space-between",
    },
  },
  navFirstPart_typo: {
    fontSize: "1.1rem",
    fontWeight: "1000",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navSecondBtn: {
    marginRight: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: "1rem",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      justifyContent: "center",
    },
  },
  logout: {
    marginLeft: "5px",
  },
  logoutmain: {
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatarForLargeDevice: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatarForSmallDevice: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  userName: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  singinavader: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  singinbutton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  routeBtn: {
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
  },
  deviceLogoutdiv: {
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    width: "100px",
    height: "auto",
    // border: "1px solid darkblue",
    position: "absolute",
    bottom: "-63px",
    right: "0",
  },
}));
