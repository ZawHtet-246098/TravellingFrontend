import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formValues, navigate) => async (dispatch) => {
  try {
    // login in the user
    const { data } = await api.signIn(formValues);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formValues, navigate) => async (dispatch) => {
  try {
    // log up in the user
    const { data } = await api.signUp(formValues);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
