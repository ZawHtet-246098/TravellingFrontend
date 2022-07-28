import {
  START_LOADING,
  END_LOADING,
  GET_HOTEL,
} from "../constants/actionTypes";

export default (
  state = { isLoading: true, hotel: [], recordID: "" },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_HOTEL:
      return {
        ...state,
        hotel: action.payload.data,
        recordID: action.payload.id,
      };
    default:
      return state;
  }
};
