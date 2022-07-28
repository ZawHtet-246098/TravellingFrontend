import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
  Button,
} from "@material-ui/core";
import useStyle from "./style";

const SingleCity = ({ item }) => {
  const classes = useStyle();
  return (
    <Grid item>
      <Card raised elevation={6}>
        <CardMedia className={classes.popularCityMedia} image={item.img} />
      </Card>
      <CardContent className={classes.popularCityCardContent}>
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", fontSize: "1.2rem", paddingTop: "1rem" }}
        >
          {item.name}
        </Typography>
      </CardContent>
      <CardContent className={classes.popularCityCardContent}>
        <Typography variant="h6" paragraph style={{ fontSize: "1rem" }}>
          {item.desc}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default SingleCity;
