import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formWrapper: {
    width: "380px",
    height: "450px",
    padding: "2rem 2rem",
    // border: "1px solid black",
    // background: "rgba(255,255,255,0.5)",
    // backdropFilter: "blur(5px)",
    background: "white",
    marginTop: "3rem",

    [theme.breakpoints.up("md")]: {
      position: "sticky",
      top: "0",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      height: "400px",
      padding: "1rem 1rem",
      margin: "auto",
      marginTop: "3rem",
    },
  },
  fileInput: {
    padding: "10px 0px",
    border: "1px solid",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "darkblue",
  },
}));
