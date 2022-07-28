import React from "react";
import { Container, Button, Typography, Grid } from "@material-ui/core";
import useStyle from "./style";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const company = ["About", "Flight", "Hotel", "Review"];
const icon = ["FacebookIcon", "InstagramIcon", "TwitterIcon", "PinterestIcon"];

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerContainer} align="center">
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        SKIPLAGGED
      </Typography>

      <Typography
        variant="h6"
        paragraph
        style={{ fontSize: "1rem", width: "70%" }}
      >
        Search flights, hotels, hire cars, travel guides and more with KAYAK.
        KAYAK searches hundreds of other travel sites at once to get you the
        information you need to make the right decisions.
      </Typography>
      <Container>
        {company.map((item, index) => (
          <Button key={index} variant="outlined">
            {" "}
            {item}
          </Button>
        ))}
      </Container>
      <Typography
        variant="h6"
        paragraph
        style={{ fontSize: "1rem", marginTop: "1rem" }}
      >
        KAYAK is part of Booking Holdings Inc., the world leader in online
        travel & related services.
      </Typography>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginTop: "1rem" }}
      >
        Stay in touch
      </Typography>
      <Grid>
        <Grid item>
          <InstagramIcon style={{ margin: "1rem" }} />
          <FacebookIcon style={{ margin: "1rem" }} />
          <TwitterIcon style={{ margin: "1rem" }} />
          <LinkedInIcon style={{ margin: "1rem" }} />
          <PinterestIcon style={{ margin: "1rem" }} />
        </Grid>
      </Grid>
      <Typography variant="h6" paragraph style={{ fontSize: "1rem" }}>
        © Colorlib. All Rights Reserved.
      </Typography>
    </div>
  );
};

export default Footer;
