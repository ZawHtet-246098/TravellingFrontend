import React, { useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  ButtonBase,
  Box,
  Avatar,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import { useDispatch } from "react-redux";
import { likePost, getPost } from "../../../actions/posts";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showMore, setShowMore] = useState("false");
  const [likes, setLikes] = useState(post?.likes);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = likes.find((like) => like === userId);
  // console.log(post.likes);
  console.log(likes);
  console.log(hasLikedPost);
  // console.log(user.result.googleId);
  // console.log(user.result._id);

  const getSingle = async (id) => {
    dispatch(getPost(id));
  };

  const handleLike = async (id) => {
    dispatch(
      likePost({
        id: post._id,
        name: user?.result?.name,
        token: user.token,
        userId: userId,
      })
    );

    if (hasLikedPost) {
      setLikes(likes.filter((id) => id !== userId));
    } else {
      setLikes([...likes, userId]);
    }
  };
  return (
    <>
      <Card className={classes.postCard}>
        <CardMedia className={classes.postMedia} image={post.selectedFile} />

        <Box className={classes.postContant}>
          <div className={classes.postUser}>
            <Avatar style={{ background: "darkblue" }}>
              {post?.name.charAt(0)}
            </Avatar>
            <Typography variant="h6" style={{ padding: "0 .5rem" }}>
              {post.name}
              <Typography style={{ fontSize: ".9rem" }}>
                {post.createdAt}
              </Typography>
            </Typography>
          </div>
          <Typography variant="h5">{post.title}</Typography>
          {/* <Typography variant="h6" style={{ fontSize: "1rem" }}>
            {post.createdAt}
          </Typography> */}
          <Typography
            variant="h6"
            style={{ fontSize: "1rem", marginBottom: ".4rem" }}
            paragraph
          >
            {/* {post.message} */}
            {showMore ? post.message.slice(0, 150) + "..." : post.message}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontSize: "1rem", marginBottom: ".4rem" }}
            paragraph
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "Learn more"}
          </Typography>
          <div>
            <Button variant="text" onClick={() => handleLike(post._id)}>
              <FavoriteIcon />
              <Typography style={{ padding: "0 .2rem" }}>
                {likes.length}
                {/* {post.likes.length} */}
              </Typography>
            </Button>
            <Button variant="text" onClick={() => getSingle(post._id)}>
              <CommentIcon />
              <Typography style={{ padding: "0 .2rem" }}>
                {" "}
                {/* {post.comments.length} */}
              </Typography>
            </Button>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default Post;
