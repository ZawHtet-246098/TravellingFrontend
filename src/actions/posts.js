import * as api from "../api";
import {
  CREATE,
  FETCH_ALL,
  START_LOADING,
  END_LOADING,
  LIKE,
  FETCH_POST,
} from "../constants/actionTypes";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    console.log(post);
    const { data } = await api.createPost(post);
    // console.log(data);
    // console.log("i am here");

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (post) => async (dispatch) => {
  // const user = JSON.parse(localStorage.getItem("profile"));

  console.log(post);
  const id = post.id;

  try {
    const { data } = await api.likePost(id, post);
    console.log(data);

    // dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
