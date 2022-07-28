import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Button, Grid, Box } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PoolIcon from "@material-ui/icons/Pool";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import SignalWifi4BarIcon from "@material-ui/icons/SignalWifi4Bar";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import BathtubIcon from "@material-ui/icons/Bathtub";

import ImageFrame from "./ImageFrame";
import { useDispatch } from "react-redux";
import { getHotel } from "../../../actions/hotel";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import StarIcon from "@material-ui/icons/Star";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Loader from "../../Loader/Loader";
import SingleHotelForm from "./SingleHotelForm";
import SingleRoom from "./SingleRoom";
import Footer from "../../Home/Footer/Footer";
import Properties from "./Properties/Properties";
import Slider from "./react-slider/Slider";

const options = ["Excellent", "Good", "Wonderful"];
const random = Math.floor(Math.random() * options.length);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HotelSingle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  // const { hotel, recordID, isLoading } = useSelector((state) => state.hotel);
  const { exactHotel, isLoading, hotels } = useSelector(
    (state) => state.hotels
  );

  const date = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(date.getDate() + 1);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const start = new Date().getDate();
  const end = checkOutDate.getDate();
  const hotel = localStorage.getItem("hotel");
  localStorage.setItem("checkinout", JSON.stringify({ start, end }));
  const params = useParams();
  console.log(hotels);
  console.log(params.id);
  console.log(JSON.parse(hotel));
  console.log(checkInDate.getDate());
  console.log(checkOutDate.getDate());
  console.log(end);
  let hotelWithId;

  if (exactHotel) {
    hotelWithId = exactHotel;
  }
  hotelWithId = JSON.parse(localStorage.getItem("hotel"));

  const array = [];
  for (let i = 0; i < Number(hotelWithId.rating); i++) {
    if (i != 0) {
      array.push(i);
    }
  }
  // console.log(hotels);

  // if (hotel) {
  //   const text = hotel.address;
  //   console.log(text.split(" "));
  // }

  // useEffect(() => {
  //   if (params.id) {
  //     dispatch(getHotel(params.id));
  //   }
  // }, []);

  const handleClick = () => {
    navigate("/hotel");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.singleWholeHotelWrapper}>
          <div className={classes.singleHotelWrapper}>
            <Button onClick={handleClick}>
              <ArrowBackIcon />
              See all properties
            </Button>
            <ImageFrame photos={hotelWithId.photos} />
            <div style={{ padding: "1rem" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {hotelWithId.name}
              </Typography>
              {array?.map((num, index) => (
                <StarIcon style={{ fontSize: "1.2rem" }} key={index} />
              ))}
              <Typography
                variant="h6"
                paragraph
                style={{ fontSize: "1rem", marginBottom: "0" }}
              >
                {hotelWithId.address}
              </Typography>
              <div>
                <Typography
                  variant="h6"
                  paragraph
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "0",
                  }}
                >
                  {`${hotelWithId.rating}/5 ${options[random]}`}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  paragraph
                  style={{
                    fontsize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "0",
                  }}
                >
                  Property highlights
                </Typography>
                <Box style={{ padding: ".5rem 0" }} sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    {hotelWithId.featured
                      ? hotelWithId.featured.map((feature, index) => (
                          <Grid key={index} item xs={6} md={4}>
                            {feature === "Free parking" && (
                              <DirectionsCarIcon />
                            )}
                            {feature === "Pool" && <PoolIcon />}
                            {feature === "FreeWifi" && <SignalWifi4BarIcon />}
                            {feature === "Gym" && <FitnessCenterIcon />}
                            {feature === "Air conditioning" && <AcUnitIcon />}
                            {feature === "Bathtub" && <BathtubIcon />}
                            {feature}
                          </Grid>
                        ))
                      : ""}
                  </Grid>
                </Box>
                <Box
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                  sx={{ flexGrow: 1 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                      <Typography
                        variant="h6"
                        paragraph
                        style={{ fontWeight: "bold" }}
                      >
                        Main amenities
                      </Typography>
                      {hotelWithId.serviceOne.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography
                        variant="h6"
                        paragraph
                        style={{ fontWeight: "bold" }}
                      >
                        For families
                      </Typography>
                      {hotelWithId.serviceTwo.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography
                        variant="h6"
                        paragraph
                        style={{ fontWeight: "bold" }}
                      >
                        Cleaning & safety
                      </Typography>
                      {hotelWithId.serviceThree.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </div>
            <div>
              <Typography
                variant="h5"
                style={{
                  fontWeight: "bold",
                  fontFamily: "inherit",
                  marginLeft: "1rem",
                }}
              >
                Find Your Room
              </Typography>
              <SingleHotelForm
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                setCheckInDate={setCheckInDate}
                setCheckOutDate={setCheckOutDate}
              />
            </div>
            <Box
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
              sx={{ flexGrow: 1 }}
            >
              <Grid
                container
                style={{ display: "flex", flexWrap: "wrap" }}
                spacing={2}
              >
                {hotelWithId.rooms.map((room, index) => (
                  <Grid key={index} item xs={12} md={4}>
                    <SingleRoom
                      roomsFeature={hotelWithId.roomsFeature}
                      room={room}
                      breakfast={hotelWithId.breakfast}
                      startDate={checkInDate.getDate()}
                      endDate={checkOutDate.getDate()}
                      index={index}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
          <div>
            <Typography
              variant="h5"
              component="div"
              className={classes.similarNearby}
            >
              Similar properties nearby
            </Typography>
            <Slider hotels={hotels} />
          </div>
          <Properties />
          <Footer />
        </div>
      )}
    </>
  );
};

export default HotelSingle;
