import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../actions/posts";
import { getPosts } from "../../../actions/posts";

import useStyles from "./styles";

const ReviewForm = () => {
  const { posts } = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  // console.log(posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const clear = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createPost({ ...postData, name: user?.result?.name, token: user.token })
    );

    setPostData({ title: "", message: "", selectedFile: "" });
    dispatch(getPosts());
  };

  // console.log(user.token);
  // console.log(postData);
  return (
    <div className={classes.formWrapper}>
      <form
        className={classes.reviewForm}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography gutterBottom variant="h5">
          Creating a post
        </Typography>
        <TextField
          style={{
            border: "1px solid",
            borderRadius: "4px",
            marginBottom: ".5rem",
          }}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          style={{
            border: "1px solid",
            borderRadius: "4px",
            marginBottom: ".5rem",
          }}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          minRows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          className={classes.buttonSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          style={{ background: "darkred" }}
        >
          Clear
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
