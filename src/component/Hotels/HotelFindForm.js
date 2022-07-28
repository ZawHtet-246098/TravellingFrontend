import React, { useState } from "react";
import useStyles from "./styles";
import {
  Typography,
  Container,
  Button,
  CircularProgress,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../actions/hotel";
import { useNavigate } from "react-router-dom";
// import CountrySelect from "../Input/Input";
import CountrySelect from "../Input/Input";

const HotelFindForm = ({ price, rating, setDestination, destination }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getHotels(destination, price, rating));
  };
  let newDestination = destination;

  if (destination === "UK") {
    newDestination = "United Kingdom";
  }

  // const handleChangeThree = (e) => {
  //   setDestination(e.target.value);
  //   // console.log(e.target.value);
  //   console.log(destination);
  // };
  const handleChangeThree = (event, newValue) => {
    console.log(newValue);
    setDestination(newValue.label);
  };

  return (
    <Container className={classes.hotelFindFrom} align="center">
      {/* <TextField
        className={`${classes.destinationInput} ${classes.homeTextField}`}
        id="filled-basic"
        label="Destination"
        variant="filled"
        InputLabelProps={{
          style: { fontSize: 17, color: "black" },
        }}
        sx={{ m: 1 }}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      /> */}
      <div>
        <CountrySelect
          className={`${classes.destinationInput} ${classes.homeTextField}`}
          // onChange={(e) => setDestination(e.target.value)}
          handleChangeThree={handleChangeThree}
          label={"Destination"}
          newDestination={newDestination}
          dyWidth={"350px"}
          color={"black"}
        />
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Check-in"
          renderInput={(params) => (
            <TextField
              id="filled-basic"
              variant="filled"
              className={`${classes.dateInput} ${classes.homeTextField}`}
              InputLabelProps={{
                style: {
                  fontSize: 20,
                  color: "black",
                },
              }}
              sx={{ m: 1 }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Check-out"
          renderInput={(params) => (
            <TextField
              id="filled-basic"
              variant="filled"
              className={classes.homeTextField}
              InputLabelProps={{
                style: { fontSize: 20, color: "black" },
              }}
              sx={{ m: 1 }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
      <Button
        style={{ textTransform: "none", fontSize: "1rem" }}
        // className={`${classes.homeSearchBtn} ${classes.homeTextField}`}
        className={classes.homeSearchBtn}
        variant="outlined"
        endIcon={<SearchIcon />}
        onClick={handleClick}
      >
        Search
      </Button>
    </Container>
  );
};

export default HotelFindForm;
