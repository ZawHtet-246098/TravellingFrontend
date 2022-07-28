import {
  GET_FLIGHT,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export default (
  state = { isLoading: true, flights: [], mainDestination: "" },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_FLIGHT:
      return { ...state, mainDestination: action.payload };

    default:
      return state;
  }
};
