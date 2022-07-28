import * as api from "../api";
import {
  GET_FLIGHT,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export const getFlights =
  (allValue, value, returnValue) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      // const { data } = await api.fetchHotels(country, price, rating);

      dispatch({
        type: GET_FLIGHT,
        payload: { ...allValue, value, returnValue },
      });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
