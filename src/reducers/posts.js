import {
  CREATE,
  FETCH_ALL,
  END_LOADING,
  START_LOADING,
  LIKE,
  FETCH_POST,
} from "../constants/actionTypes";

export default (state = { isLoading: false, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case CREATE:
      return { ...state, posts: [action.payload] };
    case FETCH_ALL:
      return { ...state, posts: action.payload.data };
    // case LIKE:
    //   return {
    //     ...state,
    //     posts: state.posts.data.map((post) =>
    //       post._id === action.payload._id ? action.payload : post
    //     ),
    //   };
    default:
      return state;
  }
};

// case FETCH_POST:
//   return { ...state, post: action.payload.post };
