import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  hometypo: {
    paddingTop: "9rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  hotelWholeWrapper: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down(1020)]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  hotelWrapper: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      minWidth: "800px",
    },
  },
  homeleadingtypotwo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  destinationInput: {
    width: "450px !important",
    [theme.breakpoints.down("xs")]: {
      width: "90% !important",
    },
  },
  homeTextField: {
    border: "2px solid darkblue !important",
    color: "black !important",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
  // dateInput: {
  //   [theme.breakpoints.down("xs")]: {
  //     width: "0",
  //     border: "none",
  //     display: "none",
  //   },
  // },
  homeSearchBtn: {
    border: "2px solid darkblue !important",
    padding: "13px 18px",
    margin: ".5rem",
    color: "black",
    fontSize: "20px",
    background: "gray",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
  filterContainer: {
    [theme.breakpoints.down(1020)]: {
      display: "flex",
    },
  },
  filterSection: {
    width: "220px",
    maxHeight: "550px !important",
    margin: "0 1rem",
    [theme.breakpoints.up("md")]: {
      position: "sticky !important",
      top: "0",
    },
    [theme.breakpoints.down(1020)]: {
      marginLeft: "1rem",
      width: "100vw",
    },
  },
  // hotelWrapper: {},

  dropDownbutton: {
    height: "58px",
    width: "400px",
    margin: "9px",
    border: "2px solid darkblue",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: "9px 0",
      marginLeft: "9px",
      float: "left",
    },
  },
  hotelFindFrom: {
    marginTop: "3rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(650)]: {
      display: "none",
    },
  },
  formForDevice: {
    paddingTop: "3.5rem",
    paddingBottom: ".5rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up(650)]: {
      display: "none",
    },
  },
  formForDeviceBtn: {
    border: "2px solid darkblue",
    background: "rgb(238,238,238)",
  },
  singleHotelfindForm: {
    marginTop: "3rem",
    display: "flex",
    [theme.breakpoints.down(650)]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "1rem",
    },
  },
  modalBtn: {
    width: "300px",
    height: "58px",
    border: "2px solid darkblue",
    margin: "9px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  handleClickAway: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
  },
  modelTypo: {
    fontWeight: "bold",
    marginLeft: "1rem",
    fontSize: "1rem",
    margin: "0",
  },
  modelBtn: {
    width: "30px",
    height: "30px",
    border: "2px solid darkblue",
    borderRadius: "50%",
    background: "rgb(230,230,230)",
  },
  modelStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,

    // background: "white",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    border: "2px solid #000",
    boxShadow: 24,
    padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  openModelText: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    color: "darkblue",
    [theme.breakpoints.up(500)]: {
      display: "none",
    },
  },
}));
