import * as api from "../api";
import {
  GET_PLACES,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export const getAllPlaces = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getPlaces();

    dispatch({ type: GET_PLACES, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
