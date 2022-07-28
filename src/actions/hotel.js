import * as api from "../api";
import {
  GET_HOTELS,
  START_LOADING,
  END_LOADING,
  GET_HOTEL,
} from "../constants/actionTypes";

export const getHotels = (country, price, rating) => async (dispatch) => {
  console.log(rating, price);
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchHotels(country, price, rating);

    dispatch({ type: GET_HOTELS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getHotel = (id) => async (dispatch) => {
  console.log(id);
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getSingleHotel(id);
    console.log(data);
    localStorage.setItem("hotel", JSON.stringify(data));

    dispatch({ type: GET_HOTEL, payload: { data, id } });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
