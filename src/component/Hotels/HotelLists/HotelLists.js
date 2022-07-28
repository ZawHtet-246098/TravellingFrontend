import React from "react";
import useStyles from "./styles";
import { StyledEngineProvider } from "@mui/material/styles";
import Slider from "./slider/Slider";

import {
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Button,
  ButtonBase,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHotel } from "../../../actions/hotel";
import { Link } from "react-router-dom";

const options = ["Excellent", "Good", "Wonderful"];
const random = Math.floor(Math.random() * options.length);
console.log(random);

const HotelLists = ({ hotel }) => {
  const discount = hotel.price - hotel.discountPrice;
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getHotel(hotel._id));
    navigate(`/hotel/${hotel._id}`);

    // console.log(hotel._id);
  };

  return (
    <Card className={classes.hotelCard}>
      <Slider height={"auto"} width={"300px"} photo={hotel.coverPhotos} />
      <ButtonBase
        LinkComponent=""
        // component="span"
        name="test"
        onClick={handleClick}
        style={{ textAlign: "start" }}
      >
        <div className={classes.cardMedia}>
          <Typography
            variant="h6"
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              color: "black",
              letterSpacing: "1px",
              fontFamily: "inherit",
            }}
          >
            {hotel.name.toLowerCase()}
          </Typography>
          <Typography variant="h6" paragraph style={{ fontSize: ".9rem" }}>
            {hotel.city}
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography
                variant="h6"
                paragraph
                style={{ fontSize: ".9rem", margin: "0" }}
              >
                Fully refundable
              </Typography>
              <Typography
                variant="h6"
                paragraph
                style={{ fontSize: ".9rem", margin: "0" }}
              >
                Reserved now, pay later
              </Typography>
              <Button
                style={{
                  border: "1px solid darkblue",
                  padding: ".2rem",
                  fontSize: ".6rem",
                  fontWeight: "bold",
                }}
              >
                <img
                  style={{ padding: "0 .4rem" }}
                  src="https://skiplagged.com/img/hotels/amenity-5.svg"
                  alt=""
                />
                FREE INTERNET
              </Button>
              <Typography
                style={{
                  fontSize: "1rem",
                  padding: "1rem 0",
                  margin: "0",
                  fontWeight: "bold",
                }}
              >
                <span
                  style={{
                    background: "darkblue",
                    padding: ".5rem",
                    color: "white",
                    borderRadius: "3px",
                  }}
                >
                  {hotel.rating}/5
                </span>

                <span style={{ fontSize: "1rem", marginLeft: ".4rem" }}>
                  {options[random]}
                </span>
              </Typography>
            </div>
            <div style={{ textAlign: "right" }}>
              {hotel.discountPrice === 0 ? (
                ""
              ) : (
                <Typography
                  variant="h5"
                  paragraph
                  style={{
                    fontSize: "1rem",
                    margin: "0",
                    textDecoration: "line-through",
                  }}
                >
                  USD{hotel.price}
                </Typography>
              )}

              <Typography
                variant="h5"
                paragraph
                style={{
                  fontSize: "1.5rem",
                  margin: "0",
                  fontWeight: "bold",
                }}
              >
                {hotel.discountPrice === 0
                  ? `USD${hotel.price}`
                  : `USD${discount}`}
              </Typography>
              <Typography
                variant="h6"
                paragraph
                style={{
                  fontSize: ".9rem",
                  margin: "0",
                }}
              >
                PRICE PER NIGHT
              </Typography>
              <Button
                style={{
                  border: "1px solid darkblue",
                  fontWeight: "bold",
                  color: "white",
                  background: "darkblue",
                }}
              >
                View Deal
              </Button>
            </div>
          </div>
        </div>
      </ButtonBase>
    </Card>
  );
};

export default HotelLists;
