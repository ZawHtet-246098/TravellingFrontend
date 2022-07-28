import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardAction,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import ReportIcon from "@material-ui/icons/Report";
import CancelIcon from "@material-ui/icons/CancelOutlined";

import ReviewForm from "./ReviewForm/ReviewForm";
import BlogPost from "./BlogPost/BlogPost";

const Review = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();

  return (
    <div className={classes.reviewContainer}>
      {!user && (
        <div className={classes.warningContainer}>
          <div style={{ display: "flex", align: "center" }}>
            <ReportIcon />
            <Typography>
              Please Sign In to create your own experience and like other's
              one.!{" "}
              <Link to="/login" style={{ color: "white" }}>
                SignIn
              </Link>
            </Typography>
          </div>
        </div>
      )}
      <div className={classes.blogWraper}>
        <ReviewForm />
        <BlogPost />
      </div>
    </div>
  );
};

export default Review;
