import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  ButtonBase,
} from "@material-ui/core";
import useStyle from "./placeStyle";
import { getFlights } from "../../../actions/flight";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Place = ({ item, setAllValue, allValue }) => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const navigate = useNavigate();

  // console.log(allValue);
  // if (allValue.To) {
  //   dispatch(getFlights(allValue));
  // }

  const handleClick = async () => {
    const city = item.city;
    await setAllValue({ ...allValue, To: city });
    try {
      dispatch(getFlights({ ...allValue, To: city }));
      navigate("/hotel");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid className={classes.card} item>
      <Card raised elevation={6}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={handleClick}
        >
          <CardMedia className={classes.media} image={item.photo}>
            <div className={classes.restrictionBtn}>
              <Button
                style={{
                  textTransform: "none",
                  fontWeight: "bold",
                  background: "darkblue",
                  padding: ".2rem",
                  color: "white",
                }}
                variant="contained"
                size="small"
              >
                {item.restriction}
              </Button>
            </div>
          </CardMedia>

          <CardContent>
            <Typography
              // color="textSecodary"
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {item.city}
            </Typography>
            <Typography
              variant="h6"
              paragraph
              style={{ fontSize: "1rem", marginBottom: "0" }}
            >
              {item.requirementOne}
            </Typography>
            <Typography
              variant="h6"
              paragraph
              style={{ fontSize: "1rem", marginBottom: "0" }}
            >
              {item.requirementTwo}
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    </Grid>
  );
};

export default Place;
