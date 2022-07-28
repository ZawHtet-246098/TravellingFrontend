import React, { useState } from "react";
import useStyles from "../styles";
import {
  Typography,
  Container,
  Button,
  CircularProgress,
  Box,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PersonIcon from "@material-ui/icons/Person";

import { useDispatch, useSelector } from "react-redux";
// import { getHotels } from "../../actions/hotel";
import { useNavigate } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Modal from "@mui/material/Modal";
// import { SxProps } from "@mui/material";
// import { SxProps } from "@mui/system";

const SingleHotelForm = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
}) => {
  console.log(checkInDate, checkOutDate);
  const {} = useSelector((state) => state.hotels);

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [rooms, setRoom] = useState([{ room: 1, adult: 1, child: 0 }]);
  let totalAdults = 0;
  let totalChilds = 0;
  localStorage.setItem("room", JSON.stringify({ rooms }));
  rooms.map((room) => {
    totalAdults = totalAdults + room.adult;
    totalChilds = totalChilds + room.child;
  });

  const handleOpen = () => {
    // setRoom([{ room: 1, adult: 1, child: 0 }]);
    setOpen(true);
  };
  // const handleClose = () => setOpen(false);

  const handleClose = () => {
    setOpen(false);
    setRoom([{ room: 1, adult: 1, child: 0 }]);
  };

  const handleCloseONE = () => {
    setOpen(false);
    setRoom([{ room: 1, adult: 1, child: 0 }]);
  };

  const handleTextClick = () => {
    const exactRoom = rooms[rooms.length - 1];
    setRoom([
      ...rooms,
      { room: exactRoom.room + 1, adult: 1, child: 0, remove: "Remove Room" },
    ]);
  };

  const handleDone = () => {
    setOpen(false);
  };

  const samehandlePlus = (exactRoom, newItem) => {
    setRoom(
      rooms.map((item, index) =>
        item.room === exactRoom.room ? newItem : item
      )
    );
  };
  const samehandleMinus = (exactRoom, newItem) => {
    setRoom(
      rooms.map((item, index) =>
        item.room === exactRoom.room ? newItem : item
      )
    );
  };

  const handlePlus = (index) => {
    const exactRoom = rooms[index];
    const newItem = { ...exactRoom, adult: exactRoom.adult + 1 };
    samehandlePlus(exactRoom, newItem);
  };

  const handlePlusOne = (index) => {
    const exactRoom = rooms[index];
    const newItem = { ...exactRoom, child: exactRoom.child + 1 };
    samehandlePlus(exactRoom, newItem);
  };
  // ...rooms.filter((singleRoom) => singleRoom.room !== exactRoom.room),
  // { ...exactRoom, adult: exactRoom.adult + 1 },

  const handleMinus = (index) => {
    console.log(index);
    const exactRoom = rooms[index];
    let newItem;
    if (exactRoom.adult === 1) {
      newItem = { ...exactRoom };
    } else {
      newItem = { ...exactRoom, adult: exactRoom.adult - 1 };
    }

    samehandleMinus(exactRoom, newItem);
  };
  const handleMinusOne = (index) => {
    const exactRoom = rooms[index];
    let newItem;
    if (exactRoom.child === 0) {
      newItem = { ...exactRoom };
    } else {
      newItem = { ...exactRoom, child: exactRoom.child - 1 };
    }

    samehandleMinus(exactRoom, newItem);
  };

  const removeHandleClick = (index) => {
    const exactRoom = rooms[index];
    const lastRoom = rooms[rooms.length - 1];
    // const anotherRoomArray = [];
    const anotherRoomWhichIndexIsGreater = rooms.filter(
      (singleRoom) => singleRoom.room > exactRoom.room
    );
    // anotherRoomArray.push(anotherRoomWhichIndexIsGreater);

    console.log(anotherRoomWhichIndexIsGreater);

    if (exactRoom.room === lastRoom.room) {
      setRoom(rooms.filter((singleRoom) => singleRoom.room !== exactRoom.room));
    } else {
      const newArray = [];

      anotherRoomWhichIndexIsGreater.map((singlemaproom) => {
        const newRoom = {
          ...singlemaproom,
          room: Number(singlemaproom.room) - 1,
        };
        newArray.push(newRoom);
      });
      const remainData = rooms.slice(0, index);

      setRoom([...remainData, ...newArray]);
    }
  };

  console.log(rooms);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 1,
  };

  return (
    <Container align="center" className={classes.singleHotelfindForm}>
      <Typography
        onClick={() => setOpen(true)}
        className={classes.openModelText}
      >
        <PersonIcon style={{ marginRight: ".5rem" }} />
        {rooms.length}rooms / {totalAdults} travellers
        {totalChilds ? ` with ${totalChilds} childs` : ""}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Date"
          value={checkInDate}
          onChange={(newValue) => {
            setCheckInDate(newValue);
          }}
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Retrun Date"
          value={checkOutDate}
          onChange={(newValue) => {
            setCheckOutDate(newValue);
          }}
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
      <div>
        <Button
          onClick={handleOpen}
          className={classes.modalBtn}
          style={{ textTransform: "none", background: "rgb(230,230,230)" }}
        >
          <Typography
            variant="h6"
            paragraph
            style={{
              fontSize: "1.1rem",
              fontFamily: "inherit",
              marginBottom: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <PersonIcon style={{ marginRight: ".5rem" }} />
            {rooms.length}rooms / {totalAdults} travellers
            {totalChilds ? ` with ${totalChilds} childs` : ""}
          </Typography>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.modelStyle}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CloseIcon onClick={handleCloseONE} style={{ color: "red" }} />
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ fontWeight: "bold", marginLeft: "1rem" }}
              >
                Travellers
              </Typography>
            </div>
            <ul />
            {rooms?.map((room, index) => (
              <div
                key={index}
                style={{ border: "1px solid darkblue", marginBottom: "1rem" }}
              >
                <Typography className={classes.modelTypo} variant="h6">
                  Room {index + 1}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                  }}
                >
                  <Typography
                    variant="h6"
                    paragraph
                    className={classes.modelTypo}
                  >
                    Adults
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      widht: "100%",
                    }}
                  >
                    <Button>
                      <AddIcon
                        onClick={() => handlePlus(index)}
                        className={classes.modelBtn}
                      />
                    </Button>
                    <Typography
                      variant="h6"
                      paragraph
                      style={{ marginLeft: "0" }}
                      className={classes.modelTypo}
                    >
                      {room.adult}
                    </Typography>
                    <Button>
                      <RemoveIcon
                        onClick={() => handleMinus(index)}
                        className={classes.modelBtn}
                      />
                    </Button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    paragraph
                    className={classes.modelTypo}
                  >
                    Children
                    <span>(Age 0-17)</span>
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button>
                      <AddIcon
                        onClick={() => handlePlusOne(index)}
                        className={classes.modelBtn}
                      />
                    </Button>
                    <Typography
                      variant="h6"
                      paragraph
                      className={classes.modelTypo}
                      style={{ marginLeft: "0" }}
                    >
                      {room.child}
                    </Typography>
                    <Button>
                      <RemoveIcon
                        onClick={() => handleMinusOne(index)}
                        className={classes.modelBtn}
                      />
                    </Button>
                  </div>
                </div>
                <div
                  style={{
                    widht: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {room.remove && (
                    <Button
                      style={{ textTransform: "none" }}
                      onClick={() => removeHandleClick(index)}
                    >
                      {room.remove}
                    </Button>
                  )}
                </div>
              </div>
            ))}
            <Button
              style={{ fontSize: "1rem", color: "darkblue", float: "left" }}
              onClick={handleDone}
            >
              Done
            </Button>
            <Button
              style={{ fontSize: "1rem", color: "darkblue", float: "right" }}
              onClick={handleTextClick}
            >
              Add another room
            </Button>
          </Box>
        </Modal>
      </div>

      <Button
        style={{ textTransform: "none", fontSize: "1rem" }}
        // className={`${classes.homeSearchBtn} ${classes.homeTextField}`}
        className={classes.homeSearchBtn}
        variant="outlined"
        endIcon={<SearchIcon />}
        // onClick={handleClick}
      >
        Search
      </Button>
    </Container>
  );
};

export default SingleHotelForm;
