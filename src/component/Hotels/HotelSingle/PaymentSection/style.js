import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  hotelName: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: ".2rem",
    },
  },
  paymentParent: {
    // border: "1px solid darkblue",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    width: "600px",
    height: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  patmentTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mainPaymentWrapper: {
    padding: "3rem 2rem",
    width: "100vw",
    paddingBottom: "0",
    // border: "1px solid red",
    margin: "auto",
    [theme.breakpoints.up(1200)]: {
      width: "1200px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem .3rem",
      paddingBottom: "1rem",
    },
  },
  nameEmailPhone: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  nameEmailPhoneTextfield: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
    },
  },
  paymentForm: {
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
    },
  },
  paymentGrid: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  paymentIconsSeciton: {
    position: "relative",

    [theme.breakpoints.down("xs")]: {
      height: "250px",
    },
  },
  paymentButton: {
    background: "darkblue",
    color: "white",
    textTransform: "none",
    padding: ".5rem 1rem",
  },
  paymentButtonLaptopsize: {
    [theme.breakpoints.down("md")]: {
      dispaly: "none",
      visibility: "hidden",
    },
  },
  paymentButtonDeviceSize: {
    [theme.breakpoints.up(550)]: {
      dispaly: "none",
      visibility: "hidden",
    },
  },
  notibar: {
    border: "1px solid green",
    background: "white",
    color: "darkgreen",
    padding: ".2rem",
    borderRadius: ".2rem",
    marginBottom: "1rem",
  },
  firstLeftDiv: {
    background: "#FFFFFF",
    // padding: "1rem",
    border: "1px solid gray",
    marginBottom: "1rem",
    borderRadius: ".2rem",
  },
  secondLeftDiv: {
    background: "#FFFFFF",
    // padding: "1rem",
    border: "1px solid gray",
    marginBottom: "1rem",
    borderRadius: ".2rem",
  },
  chipTypo: {
    display: "flex",
    alignItems: "center",
    fontSize: ".8rem",
  },
  chipIcon: {
    fontSize: "1rem",
    margin: "0 .5rem",
    marginLeft: "0",
  },
}));
