import React, { useState } from "react";
import Slider from "../HotelLists/slider/Slider";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Paper,
  Button,
  Box,
} from "@material-ui/core";

import Modal from "@mui/material/Modal";

import SquareFootIcon from "@material-ui/icons/SquareFoot";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HotelIcon from "@material-ui/icons/Hotel";
import WifiIcon from "@material-ui/icons/Wifi";
import DirectionsCarFilledIcon from "@material-ui/icons/DirectionsCar";
import CheckIcon from "@material-ui/icons/Check";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import ReportIcon from "@material-ui/icons/Report";
import PaymentModel from "./PaymentSection/PaymentModel";

const SingleRoom = ({
  room,
  roomsFeature,
  breakfast,
  startDate,
  endDate,
  index,
}) => {
  const [extraPrice, setExtraPrice] = useState("0");
  const classes = useStyles();
  console.log(breakfast);
  console.log(Number(extraPrice));
  const totalPrice =
    room.price * (endDate - startDate) +
    Number(extraPrice) * (endDate - startDate);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    localStorage.setItem("roomIndex", index);
  };
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{ width: "350px", border: "1px solid darkblue", margin: "auto" }}
    >
      <Paper elevation={5}>
        <Slider height={"200px"} photo={room.photos} />
        <div style={{ padding: ".5rem" }}>
          <Typography
            paragraph
            style={{ fontSize: "1rem", fontWeight: "bold" }}
            variant="h6"
          >
            {room.name}
          </Typography>
          <Typography
            variant="h6"
            paragraph
            className={classes.roomFeatureStyle}
          >
            <LocationCityIcon className={classes.featureIcon} />
            {room.view}
          </Typography>
          <Typography
            variant="h6"
            paragraph
            className={classes.roomFeatureStyle}
          >
            <PeopleAltIcon className={classes.featureIcon} />
            {`${room.sleep} sleep`}
          </Typography>
          <Typography
            variant="h6"
            paragraph
            className={classes.roomFeatureStyle}
          >
            <HotelIcon className={classes.featureIcon} />
            {room.bed == "2"
              ? `${room.bed} Twin beds`
              : `${room.bed} Master bed`}
          </Typography>
          {roomsFeature.map((item, index) => (
            <Typography
              key={index}
              variant="h6"
              paragraph
              className={classes.roomFeatureStyle}
            >
              {item === "32 sq m" && (
                <SquareFootIcon className={classes.featureIcon} />
              )}
              {/* {item === "1 King Bed" && <HotelIcon />} */}
              {item === "Free Wifi" && (
                <WifiIcon className={classes.featureIcon} />
              )}
              {item === "Free self parking" && (
                <DirectionsCarFilledIcon className={classes.featureIcon} />
              )}
              {item === "Collect and Redeeem" && (
                <CheckIcon className={classes.featureIcon} />
              )}
              {/* {item === "Bathtub" && <BathtubIcon />} */}
              {item}
            </Typography>
          ))}
          <Typography
            variant="h6"
            paragraph
            style={{ color: "darkgreen" }}
            className={classes.roomFeatureStyle}
          >
            Fully refundable
            <ReportIcon />
          </Typography>
          <hr />
          <Typography
            variant="h6"
            paragraph
            style={{ fontSize: "1rem", fontWeight: "bold" }}
            className={classes.roomFeatureStyle}
          >
            Extras
          </Typography>
          {/* <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl> */}
          <FormControl style={{ position: "relative" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={extraPrice}
              name="radio-buttons-group"
              onChange={(e) => setExtraPrice(e.target.value)}
            >
              <FormControlLabel
                value="0"
                control={<Radio color="primary" />}
                className={classes.smallRadioButton}
                label={
                  <div
                    style={{
                      width: "300px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>No extras</p>
                    <p>+ USD 0</p>
                  </div>
                }
              />
              <FormControlLabel
                value={breakfast !== undefined ? `${breakfast}` : "49"}
                control={<Radio color="primary" />}
                className={classes.smallRadioButton}
                label={
                  <div
                    style={{
                      width: "300px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Breakfast</p>
                    <p>+ USD {breakfast ? breakfast : "49"}</p>
                  </div>
                }
              />
            </RadioGroup>
          </FormControl>
          <hr />
          <div style={{ position: "relative" }}>
            <Typography
              variant="h6"
              paragraph
              style={{ fontSize: "1rem", fontWeight: "bold" }}
              className={classes.roomFeatureStyle}
            >
              Total
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              // className={classes.roomFeatureStyle}
            >
              {`USD ${totalPrice}`}
            </Typography>
            {/* <Button
              variant="contained"
              style={{
                background: "darkblue",
                color: "white",
                textTransform: "none",
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
            >
              Reserve
            </Button> */}
            <div>
              <Button
                variant="contained"
                onClick={handleOpen}
                style={{
                  background: "darkblue",
                  color: "white",
                  textTransform: "none",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              >
                Reserve
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box>
                  <PaymentModel
                    setOpen={setOpen}
                    open={open}
                    totalPrice={totalPrice}
                    startDate={startDate}
                  />
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SingleRoom;
