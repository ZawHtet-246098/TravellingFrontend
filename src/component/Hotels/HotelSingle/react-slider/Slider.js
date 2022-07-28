import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { useDispatch } from "react-redux";

import CheckIcon from "@material-ui/icons/Check";
import { getHotel } from "../../../../actions/hotel";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  ButtonBase,
} from "@material-ui/core";

import useStyles from "./style";

const handleDragStart = (e) => e.preventDefault();

const properties = ["Pool", "Parking included", "Free Wifi"];

const items = [
  <img
    style={{
      width: "300px",
      height: "300px",
      paddingRight: ".5rem",
      paddingLeft: ".5rem",
    }}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyG35pkFIvd_goLkZWAwdPCO3JcWYZiepObNL5pyY9L3KHSqicU3HZHxdCNe0JoxGs5w&usqp=CAU"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "300px",
      height: "300px",
      paddingRight: ".5rem",
      paddingLeft: ".5rem",
    }}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HBUfacnodDVjqVSbty8-kB6qGd6BLM1jfmAGXsadvTMwBOd1Cyy1Dsg8hycqJN0iJQo&usqp=CAU"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "300px",
      height: "300px",
      paddingRight: ".5rem",
      paddingLeft: ".5rem",
    }}
    src="https://wallpaperbat.com/img/752040-tropical-island-wallpaper-top-free-tropical-island-background.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "300px",
      height: "300px",
      paddingRight: ".5rem",
      paddingLeft: ".5rem",
    }}
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HBUfacnodDVjqVSbty8-kB6qGd6BLM1jfmAGXsadvTMwBOd1Cyy1Dsg8hycqJN0iJQo&usqp=CAU"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    style={{
      width: "300px",
      height: "300px",
      paddingRight: ".5rem",
      paddingLeft: ".5rem",
    }}
    src="https://wallpaperbat.com/img/752040-tropical-island-wallpaper-top-free-tropical-island-background.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Slider = ({ hotels }) => {
  // localStorage.setItem("nearHotels", JSON.stringify(...hotels.data));
  // console.log(hotels);
  // const nearHotels = localStorage.getItem("nearHotels");
  // console.log(nearHotels);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getHotel(id));
    console.log(id);
  };

  return (
    <AliceCarousel
      activeIndex={2}
      animationDuration={500}
      disableDotsControls
      // paddingLeft={29}
      // autoPlay
      infinite
      responsive={{
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        1024: {
          items: 4,
        },
      }}
      mouseTracking
      items={hotels.data?.map((hotel, index) => (
        <ButtonBase
          component="span"
          name="test"
          onClick={() => handleClick(hotel._id)}
        >
          <Card
            style={{
              width: "300px",
              height: "400px",
              margin: "0",
              paddingRight: ".5rem",
              paddingLeft: ".5rem",
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "100%",
                height: "150px",
              }}
              // height="140"
              image={hotel.coverPhotos[1]}
              alt="green iguana"
            />
            <CardContent style={{ padding: ".3rem" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "start", fontSize: "1.2rem" }}
              >
                {hotel.name}
              </Typography>
              {properties.map((item) => (
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  parargraph
                  style={{ textAlign: "start", fontSize: "1rem" }}
                >
                  <CheckIcon />
                  {item}
                </Typography>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  parargraph
                  style={{ fontSize: "1rem" }}
                >
                  {hotel.rating}/5
                </Typography>

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                  parargraph
                >
                  USD {hotel.price}
                </Typography>
              </div>
              {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
            </CardContent>
          </Card>
        </ButtonBase>
      ))}
    />
  );
};

export default Slider;
