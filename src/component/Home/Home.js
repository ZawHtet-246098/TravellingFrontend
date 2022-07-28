import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  Typography,
  Container,
  Button,
  CircularProgress,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../images/press-banner.png";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import CountrySelect from "../Input/Input";
import { Link } from "react-router-dom";

import { getAllPlaces } from "../../actions/places";
import { getHotels } from "../../actions/hotel";
import { getFlights } from "../../actions/flight";

import ReportIcon from "@material-ui/icons/Report";

import Destinations from "./Destinations/Destinations";
import About from "./AboutPage/About";
import TopThreeCity from "./TopThreeCity/TopThreeCity";
import QuestionAndAnswer from "./QuestionAndAnswer/QuestionAndAnswer";
import Footer from "./Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { places, isLoading } = useSelector((state) => state.place);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const date = new Date();
  console.log(date);

  const classes = useStyles();
  const [value, setValue] = useState(date);
  const [returnValue, setReturnValue] = useState();
  const [allValue, setAllValue] = useState({
    From: "",
    To: "",
  });

  // console.log(allValue);

  const handleChange = (event, newValue) => {
    setAllValue({ ...allValue, From: newValue });
  };
  const handleChangeOne = (event, newValue) => {
    setAllValue({ ...allValue, To: newValue });
  };

  useEffect(() => {
    dispatch(getAllPlaces());
  }, [dispatch]);

  // const handleClick = () => {
  //   dispatch(getHotels(allValue.To.label));
  //   navigate("/hotel");
  // };
  const handleClick = () => {
    dispatch(getFlights(allValue, value, returnValue));
    navigate("/hotel");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.homewrapper}>
          {!user && (
            <div className={classes.warningContainer}>
              <div style={{ display: "flex", align: "center" }}>
                <ReportIcon />
                <Typography>
                  Please Sign In to create your own experience and like other's
                  one.!{" "}
                  <Link to="/login" style={{ color: "white" }}>
                    SignIn
                  </Link>
                </Typography>
              </div>
            </div>
          )}
          <div className={classes.homeLeading}>
            <Typography
              className={classes.hometypo}
              gutterBottom
              variant="h3"
              align="center"
            >
              Ridiculous travel deals <br /> you can't find anywhere else.
            </Typography>
            <Typography
              className={classes.homeleadingtypotwo}
              gutterBottom
              variant="h5"
              align="center"
            >
              Our flights are so cheap, United sued us... but we won.
            </Typography>
            <Container align="center" className={classes.homepageForm}>
              {/* <TextField
                className={classes.homeTextField}
                id="filled-basic"
                label="From"
                variant="filled"
                InputLabelProps={{
                  style: { fontSize: 15, color: "white" },
                }}
                value={allValue.From}
                onChange={(e) =>
                  setAllValue({ ...allValue, From: e.target.value })
                }
              /> */}

              {/* <TextField
                className={classes.homeTextField}
                id="filled-basic"
                label="To"
                variant="filled"
                InputLabelProps={{
                  style: { fontSize: 15, color: "white" },
                }}
                value={allValue.To}
                onChange={(e) =>
                  setAllValue({ ...allValue, To: e.target.value })
                }
              /> */}
              <CountrySelect
                className={`${classes.homeTextField} ${classes.homeSelectCountryInput}`}
                allValue={allValue}
                setAllValue={setAllValue}
                handleChange={handleChange}
                label={"From"}
              />
              <CountrySelect
                className={classes.homeTextField}
                allValue={allValue}
                setAllValue={setAllValue}
                handleChangeOne={handleChangeOne}
                labelOne={"To"}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Check-in"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      className={classes.homeTextField}
                      InputLabelProps={{
                        style: { fontSize: 20, color: "white" },
                      }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Check-out"
                  value={returnValue}
                  onChange={(newValue) => {
                    setReturnValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      className={classes.homeTextField}
                      InputLabelProps={{
                        style: { fontSize: 20, color: "white" },
                      }}
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
          </div>
          <img className={classes.logosTag} src={logo} alt="logo" />
          <Destinations
            places={places}
            setAllValue={setAllValue}
            allValue={allValue}
          />
          <About />
          <TopThreeCity />
          <QuestionAndAnswer />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
