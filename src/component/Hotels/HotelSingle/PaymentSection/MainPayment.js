import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Checkbox,
  Chip,
  Button,
} from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import useStyles from "./style";

import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PersonIcon from "@material-ui/icons/Person";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PoolIcon from "@material-ui/icons/Pool";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import SignalWifi4BarIcon from "@material-ui/icons/SignalWifi4Bar";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import BathtubIcon from "@material-ui/icons/Bathtub";
import HotelIcon from "@material-ui/icons/Hotel";
import PaymentIcon from "@material-ui/icons/Payment";
import LockIcon from "@material-ui/icons/Lock";
import ReportIcon from "@material-ui/icons/Report";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import GradeIcon from "@material-ui/icons/Grade";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

import Slider from "../../HotelLists/slider/Slider";

const defaultProps = [
  "Amarican Express",
  "Diner's Club International",
  "MasterCard",
  "Visa",
];

const cards = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
  "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072013/dci-logo-stacked.eps-converted.png?itok=Nv6-SD-A",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png",
  "https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA",
];

const MainPayment = () => {
  const classes = useStyles();
  const hotel = JSON.parse(localStorage.getItem("hotel"));
  const checkinout = JSON.parse(localStorage.getItem("checkinout"));
  const roomIndex = localStorage.getItem("roomIndex");
  const exactRoom = hotel.rooms[roomIndex];
  console.log(hotel);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const rooms = JSON.parse(localStorage.getItem("room"));
  console.log(rooms.rooms);
  let totalGuest = 0;

  rooms.rooms.map(
    (item) =>
      (totalGuest =
        Number(totalGuest) + Number(item.adult) + Number(item.child))
  );
  console.log(totalGuest);

  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];

  return (
    <div className={classes.mainPaymentWrapper}>
      <h1 className={classes.hotelName}>{hotel.name}</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className={classes.notibar}>
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <NotificationsActiveIcon />
              Don’t worry Book now but make changes later if something comes up.
            </Typography>
          </div>
          <div className={classes.firstLeftDiv}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                paddingLeft: "0",
                borderBottom: "1px solid grey",
              }}
            >
              <PersonIcon style={{ width: "50px", float: "left" }} />
              Step 1: Your details
            </Typography>
            <div style={{ padding: "1rem" }}>
              <Typography>
                Please tell us the one of the guests staying at the hotel as it
                appears on the ID that they’ll present at check-in. If the guest
                has more than one last name, please enter them all.
              </Typography>
              <Typography style={{ color: "red" }}>*required fields</Typography>
              <div className={classes.nameEmailPhone}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="filled"
                  size="small"
                  className={classes.nameEmailPhoneTextfield}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="filled"
                  size="small"
                  className={classes.nameEmailPhoneTextfield}
                />
                <TextField
                  id="standard-basic"
                  label="Phone Number"
                  variant="filled"
                  size="small"
                />
              </div>
              <div>
                <Typography>
                  <Checkbox
                    {...label}
                    size="small"
                    style={{ color: "green" }}
                  />
                  Check this box if you would not like to receive Hotels.com
                  special deals email newsletter that contains great hotel
                  promotions.
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.secondLeftDiv}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                paddingLeft: "0",
                borderBottom: "1px solid grey",
              }}
            >
              <HotelIcon style={{ width: "50px", float: "left" }} />
              Step 2: Room details
            </Typography>
            <div style={{ padding: "1rem" }}>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                {exactRoom.name} / {exactRoom.view}
              </Typography>
              <Typography style={{ fontWeight: "bold" }} gutterBottom>
                Property amenities
              </Typography>
              <div style={{ marginBottom: ".5rem" }}>
                {hotel.featured?.map((item) => (
                  <Chip
                    label={
                      (item === "Free parking" && (
                        <Typography className={classes.chipTypo}>
                          <DirectionsCarIcon className={classes.chipIcon} />{" "}
                          {item}{" "}
                        </Typography>
                      )) ||
                      (item === "Pool" && (
                        <Typography className={classes.chipTypo}>
                          <PoolIcon className={classes.chipIcon} /> {item}{" "}
                        </Typography>
                      )) ||
                      (item === "FreeWifi" && (
                        <Typography className={classes.chipTypo}>
                          <SignalWifi4BarIcon className={classes.chipIcon} />{" "}
                          {item}{" "}
                        </Typography>
                      )) ||
                      (item === "Gym" && (
                        <Typography className={classes.chipTypo}>
                          <FitnessCenterIcon className={classes.chipIcon} />{" "}
                          {item}{" "}
                        </Typography>
                      )) ||
                      (item === "Air conditioning" && (
                        <Typography className={classes.chipTypo}>
                          <AcUnitIcon className={classes.chipIcon} /> {item}{" "}
                        </Typography>
                      )) ||
                      (item === "Bathtub" && (
                        <Typography className={classes.chipTypo}>
                          <BathtubIcon className={classes.chipIcon} /> {item}{" "}
                        </Typography>
                      ))
                    }
                    variant="outlined"
                  />
                  // <Typography>{item}</Typography>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.secondLeftDiv}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                paddingLeft: "0",
                borderBottom: "1px solid grey",
              }}
            >
              <PaymentIcon style={{ width: "50px", float: "left" }} />
              Step 3: Payment details
            </Typography>
            <div style={{ padding: "1rem" }}>
              <Typography>
                {" "}
                <Checkbox
                  {...label}
                  size="small"
                  defaultChecked
                  style={{ color: "green" }}
                />
                We never charge any credit card fees
              </Typography>
              <Typography style={{ color: "red" }}>*required fields</Typography>
              <Grid className={classes.paymentGrid} container spacing={2}>
                <Grid
                  style={{
                    width: "300px",
                    paddingLeft: "1rem",
                  }}
                  item
                  xs={12}
                  md={6}
                >
                  <div
                    style={{
                      width: "300px",
                      marginBottom: ".5rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      variant="filled"
                      size="small"
                      style={{ width: "140px", marginRight: "1rem" }}
                    />
                    <TextField
                      id="standard-basic"
                      label="Last Name"
                      variant="filled"
                      size="small"
                      style={{ width: "140px" }}
                    />
                  </div>
                  <div>
                    <Typography>Card number*</Typography>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={defaultProps}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Card" variant="filled" />
                      )}
                    />
                  </div>
                  <div>
                    <Typography>Card number*</Typography>
                    <TextField
                      id="filled-hidden-label-small"
                      // label="0000 0000 0000 0000"
                      // defaultValue="0000 0000 0000 0000"
                      placeholder="0000 0000 0000 0000"
                      variant="filled"
                      size="small"
                      style={{ width: "300px" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "300px",
                      marginRight: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Typography>Expiry date*</Typography>
                      {/* <div style={{ display: "flex" }}> */}
                      <TextField
                        id="standard-basic"
                        label="MM"
                        variant="filled"
                        size="small"
                        style={{ width: "50px", marginRight: "1rem" }}
                      />
                      <TextField
                        id="standard-basic"
                        label="YY"
                        variant="filled"
                        size="small"
                        style={{ width: "50px" }}
                      />
                      {/* </div> */}
                    </div>
                    <div>
                      <Typography>Security code*</Typography>
                      <TextField
                        id="standard-basic"
                        label="Secure Code"
                        variant="filled"
                        size="small"
                        style={{ width: "150px" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      // textAlign: "end",
                      paddingTop: "1rem",
                    }}
                  >
                    <Button
                      // className={`${classes.paymentButton} ${classes.paymentButtonDeviceSize}`}
                      className={`${classes.paymentButton} ${classes.paymentButtonDeviceSize}`}
                    >
                      <LockOpenIcon style={{ marginRight: ".4rem" }} />
                      Book Now
                    </Button>
                  </div>
                </Grid>
                <Grid
                  className={classes.paymentIconsSeciton}
                  item
                  xs={12}
                  md={6}
                >
                  <Typography>
                    We accept the following payment methods
                  </Typography>
                  <div>
                    {cards.map((item) => (
                      <img
                        style={{
                          width: "70px",
                          height: "40px",
                          margin: "0 .2rem",
                          border: "1px solid grey",
                        }}
                        src={item}
                        alt=""
                      />
                    ))}
                    <Typography>You can count on us</Typography>
                    <ul style={{ paddingLeft: "1rem" }}>
                      <li>We use secure transmission</li>
                      <li>We protect your personal information</li>
                    </ul>
                    <div
                      style={{
                        border: "1px solid green",
                        padding: ".2rem 0",
                        color: "green",
                      }}
                    >
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ReportIcon />
                        <ReportIcon />
                        Fully Refundable untill
                        {`${month} ${date.getDate()},${date.getFullYear()}`}
                      </Typography>
                    </div>
                    <div
                      style={{ position: "absolute", right: "0", bottom: "0" }}
                    >
                      <Button
                        className={`${classes.paymentButton} ${classes.paymentButtonLaptopsize}`}
                      >
                        <LockOpenIcon style={{ marginRight: ".4rem" }} />
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <Typography style={{ fontWeight: "bold", color: "darkblue" }}>
            expedia group
          </Typography>
          <Typography style={{ fontSize: ".8rem" }}>
            * Some hotels require you to cancel more than 24 hours before
            check-in. Details on site.
            <br /> © 2022 Hotels.com is an Expedia Group company. All rights
            reserved. <br /> Hotels.com and the Hotels.com logo are trademarks
            or registered trademarks of Hotels.com, LP in the United States and/
            or other countries. All other trademarks are the property of their
            respective owners.
            <br /> * Learn more about Hotels.com™ Rewards
          </Typography>
        </Grid>
        <Grid
          style={{
            background: "#FFFFFF",
            // border: "1px solid red",
            height: "670px",
            position: "sticky",
            top: "0",
          }}
          item
          xs={12}
          md={4}
        >
          <div style={{ background: "#f5f4f1", padding: ".4rem" }}>
            <Slider height={"200px"} photo={hotel.coverPhotos} />
            <Typography style={{ fontWeight: "bold" }}>{hotel.name}</Typography>
            <Typography>{hotel.address}</Typography>
            <Typography
              variant="h6"
              style={{ display: "flex", alignItems: "center" }}
            >
              <GradeIcon />
              {hotel.rating} / 5 Very Good
            </Typography>
            <div
              style={{
                border: "1px solid gray",
                background: "#FFFFFF",
                padding: ".5rem",
              }}
            >
              <Typography style={{ fontWeight: "bold" }}>
                {hotel.rooms[roomIndex].name}
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Check-in</Typography>
                <Typography>
                  {month} {checkinout.start}, {date.getFullYear()}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Check-out</Typography>
                <Typography>
                  {month} {checkinout.end}, {date.getFullYear()}
                </Typography>
              </div>
              <div style={{ width: "100%", textAlign: "end" }}>
                <Button
                  style={{
                    textTransform: "none",
                    border: "1px solid darkblue",
                  }}
                >
                  {rooms.rooms.length}{" "}
                  {rooms.rooms.length < 1 ? "room" : "rooms"}/{" "}
                  {checkinout.end - checkinout.start}{" "}
                  {checkinout.end - checkinout > 1 ? "nights" : "night"}
                </Button>
              </div>
            </div>
          </div>
          <div style={{ margin: "1rem 0", padding: "0 .2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {month} {checkinout.start}, {date.getFullYear()}
              </Typography>
              <Typography>
                USD{" "}
                {hotel.rooms[roomIndex].price *
                  (checkinout.end - checkinout.start)}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Taxes and fees</Typography>
              <Typography>USD 20.35</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#f5f4f1",
              padding: "1rem .2rem",
              paddingTop: "0",
            }}
          >
            <Typography>Total price</Typography>
            <div>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "inherit",
                  textAlign: "end",
                }}
              >
                USD{" "}
                {hotel.rooms[roomIndex].price *
                  (checkinout.end - checkinout.start) +
                  20.35}
                <Typography style={{ fontWeight: "bold", fontSize: ".8rem" }}>
                  for {rooms.rooms.length}
                  {rooms.rooms.length < 1 ? "room" : "rooms"}, {totalGuest}{" "}
                  {totalGuest > 1 ? "guests" : "guest"},{" "}
                  {checkinout.end - checkinout.start}{" "}
                  {checkinout.end - checkinout > 1 ? "nights" : "night"}
                </Typography>
                {/* <Typography style={{ fontSize: ".8rem" }}>
                  including taxes and fees
                </Typography> */}
              </Typography>
            </div>
          </div>
          <div className={classes.notibar}>
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <TrendingUpIcon />
              This price may increase if you book later.
            </Typography>
          </div>
          {/* <Typography style={{ fontSize: ".8rem", textAlign: "center" }}>
            We’ll confirm your booking and take payment today.
          </Typography> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPayment;
