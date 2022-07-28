import {
  GET_HOTELS,
  START_LOADING,
  END_LOADING,
  GET_HOTEL,
} from "../constants/actionTypes";

export default (
  state = { isLoading: false, hotels: [], exactHotel: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_HOTELS:
      return { ...state, hotels: action.payload };
    case GET_HOTEL:
      return { ...state, exactHotel: action.payload.data };
    default:
      return state;
  }
};
