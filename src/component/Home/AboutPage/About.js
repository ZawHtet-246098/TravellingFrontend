import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import aboutData from "./aboutData";
import AboutDetail from "./AboutDetail";

const About = () => {
  //   console.log(aboutData);
  const classes = useStyles();
  return (
    <Container className={classes.aboutContainer}>
      <br />
      <Typography align="center" variant="h4" gutterBottom>
        What is skiplagged?
      </Typography>
      <Grid container alignItems="stretch" justifyContent="center" spacing={3}>
        {aboutData.map((item, index) => {
          return <AboutDetail key={index} item={item} />;
        })}
      </Grid>
    </Container>
  );
};

export default About;
