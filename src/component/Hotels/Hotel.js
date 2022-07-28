import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import HotelFindForm from "./HotelFindForm";
import { Typography, Button } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getHotels } from "../../actions/hotel";
import Loader from "../Loader/Loader";
import HotelLists from "./HotelLists/HotelLists";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import CountrySelect from "../Input/Input";

import SearchIcon from "@material-ui/icons/Search";
import ReportIcon from "@material-ui/icons/Report";

const Hotel = ({ setId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hotels, isLoading } = useSelector((state) => state.hotels);
  const { mainDestination } = useSelector((state) => state.flights);
  const destForLocal = "Singapore";
  localStorage.setItem("destination", destForLocal);
  const destinationFromlocalstorage = localStorage.getItem("destination");

  const initialDestination = mainDestination
    ? mainDestination.To.label || mainDestination.To
    : destinationFromlocalstorage;
  const [destination, setDestination] = useState(initialDestination);
  const [price, setPrice] = useState("0");
  const [rating, setRating] = useState("3.5");
  const loading = useState(true);

  let newDestination = destination;

  if (destination === "UK") {
    newDestination = "United Kingdom";
  }

  useEffect(() => {
    dispatch(getHotels(destination, price, rating));
  }, [price, rating]);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  console.log(hotels);

  const handleChangeThree = (event, newValue) => {
    console.log(newValue);
    setDestination(newValue.label);
  };

  const handleClick = () => {
    dispatch(getHotels(destination, price, rating));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <HotelFindForm
            price={price}
            rating={rating}
            setDestination={setDestination}
            destination={destination}
          />

          <div className={classes.formForDevice}>
            <CountrySelect
              handleChangeThree={handleChangeThree}
              label={"Destination"}
              newDestination={newDestination}
              // dyWidth={"350px"}
              color={"black"}
            />
            <Button
              style={{ textTransform: "none", fontSize: "1rem" }}
              className={classes.formForDeviceBtn}
              variant="outlined"
              endIcon={<SearchIcon />}
              onClick={handleClick}
            >
              Search
            </Button>
          </div>
          <div className={classes.hotelWholeWrapper}>
            <div
              // style={{ display: "inline-block" }}
              className={classes.filterSection}
            >
              <Typography
                gutterBottom
                variant="h5"
                style={{ fontWeight: 600, width: "300px" }}
              >
                Filter By
              </Typography>
              <div className={classes.filterContainer}>
                <div>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Your budget
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={price}
                      name="radio-buttons-group"
                      className={classes.filterRadio}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="300"
                        control={<Radio />}
                        label="Greater than USD 300"
                      />
                      <FormControlLabel
                        value="200"
                        control={<Radio />}
                        label="USD 200 to USD 300"
                      />
                      <FormControlLabel
                        value="125"
                        control={<Radio />}
                        label="USD 125 to USD 200"
                      />
                      <FormControlLabel
                        value="75"
                        control={<Radio />}
                        label="USD 75 to USD 125"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="Less than USD 75"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Stars
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={rating}
                      name="radio-buttons-group"
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="5 Star"
                      />
                      <FormControlLabel
                        value="4.5"
                        control={<Radio />}
                        label="4.5+ Stars"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label="4+ Stars"
                      />
                      <FormControlLabel
                        value="3.5"
                        control={<Radio />}
                        label="3.5+ Stars"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="3+ Stars"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
            <div
              // style={{
              //   display: "inline-block",
              // }}
              className={classes.hotelWrapper}
            >
              {hotels.nbHits !== 0 ? (
                <Grid>
                  <Grid item xs={12}>
                    {hotels.data?.map((hotel, index) => (
                      <HotelLists key={index} hotel={hotel} setId={setId} />
                    ))}
                  </Grid>
                </Grid>
              ) : (
                <div
                  style={{
                    padding: "8rem",
                    textAlign: "center",
                  }}
                >
                  <ReportIcon style={{ color: "darkred" }} />
                  <ReportIcon style={{ color: "darkred" }} />
                  <ReportIcon style={{ color: "darkred" }} />
                  <h4>
                    There is no hotel with this info! This country is not
                    availuable for now thanks to no data
                  </h4>
                  <h4>
                    There are availuable for 14 countries and I'm sorry for my
                    need!
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hotel;
