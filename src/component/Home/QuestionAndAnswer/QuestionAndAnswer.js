import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";

import data from "./data";
import useStyle from "./styles";
import SingleQuestion from "./SingleQuestion";

const QuestionAndAnswer = () => {
  const classes = useStyle();

  return (
    <Container className={classes.questioncontainer}>
      <Typography
        style={{ marginBottom: "2rem" }}
        align="center"
        gutterBottom
        variant="h4"
      >
        Frequently asked questions about Our Website
      </Typography>

      <Grid container alignItems="stretch" justifyContent="center" spacing={3}>
        {data.map((item, index) => (
          <SingleQuestion key={index} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default QuestionAndAnswer;
