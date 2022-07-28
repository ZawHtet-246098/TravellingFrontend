import React from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";
// import useStyles from "./aboutDetailStyle";

const AboutDetail = ({ item }) => {
  // const classes = useStyles();
  return (
    <Grid item>
      <div style={{ width: "300px", marginTop: "1rem" }}>
        {/* <Card raised elevation={6} style={{ width: "300px" }}> */}
        <Avatar
          alt="Remy Sharp"
          src={item.img}
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            marginBottom: "1rem",
          }}
          // sx={{ width: 100, height: 100 }}
        />
        <Typography
          variant="h6"
          align="center"
          style={{ fontWeight: "bold", fontSize: "1rem", padding: "1rem" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          paragraph
          style={{ fontSize: "1rem", padding: "1rem" }}
        >
          {item.desc}
        </Typography>
        {/* </Card> */}
      </div>
    </Grid>
  );
};

export default AboutDetail;
