import React, { useState, useEffect } from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Place from "./Place";
import data from "./data";
import { useDispatch } from "react-redux";
import { START_LOADING, END_LOADING } from "../../../constants/actionTypes";

const Destinations = ({ places, setAllValue, allValue }) => {
  // const randomPlaces =
  //   places.data[Math.floor(Math.random() * places.data.length)];

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("tokyo");
  // console.log(places.data);
  // console.log(randomPlaces);

  // const mapfunction = async () => {
  //   const allPlaces = await places.map((item, index) => (
  //     <Place key={index} item={item} />
  //   ));
  //   return allPlaces;
  // };

  // const options = {
  //   method: "GET",
  //   url: "https://travel-advisor.p.rapidapi.com/locations/search",
  //   params: {
  //     query: { searchValue },
  //     limit: "30",
  //     offset: "0",
  //     units: "km",
  //     location_id: "1",
  //     currency: "USD",
  //     sort: "relevance",
  //     lang: "en_US",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "fe8d6e6d52msh5a8b7aae978daa6p1479b0jsnfef4e6764d77",
  //     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  const classes = useStyles();
  return (
    <Container className={classes.destinationContainer}>
      <br />

      <Typography align="center" variant="h4">
        Destinations you can travel to now
      </Typography>
      <Typography align="center" variant="h6" paragraph>
        Popular destinations open to most visitors from the United States
      </Typography>

      <Grid container alignItems="stretch" justifyContent="center" spacing={3}>
        {places.data.map((item, index) => (
          <Place
            key={index}
            item={item}
            setAllValue={setAllValue}
            allValue={allValue}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Destinations;
