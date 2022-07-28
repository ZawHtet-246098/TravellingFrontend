import React from "react";
import Loader from "../../Loader/Loader";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post";
import useStyles from "./styles";

const BlogPost = () => {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className={classes.blogPostWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid>
          {posts.data?.map((post) => (
            <Grid style={{ marginBottom: "1rem" }} key={post._id} item xs={12}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default BlogPost;
