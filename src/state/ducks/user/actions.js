// import axios from "axios";
import * as types from "./types";


export const userLoggedIn = (token, dispatch) => (dispatch({
    type: types.SIGN_IN,
    token
}));

export const setEmail = (email, dispatch) => (dispatch({
    type: types.SET_EMAIL,
    payload: email
}));