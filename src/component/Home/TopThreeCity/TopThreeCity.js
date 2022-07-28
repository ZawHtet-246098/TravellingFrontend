import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import data from "./data";
import SingleCity from "./SingleCity";
import useStyle from "./style";

const TopThreeCity = () => {
  const classes = useStyle();
  return (
    <Container>
      <Typography align="center" variant="h4">
        Top 3 popular cities
      </Typography>
      <Typography align="center" variant="h6" paragraph gutterBottom>
        See what's popular with other travellers
      </Typography>
      <Grid
        className={classes.popularcitiesgrid}
        container
        alignItems="stretch"
        justifyContent="center"
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
      >
        {data.map((item, index) => {
          return <SingleCity key={index} item={item} />;
        })}
      </Grid>
    </Container>
  );
};

export default TopThreeCity;
