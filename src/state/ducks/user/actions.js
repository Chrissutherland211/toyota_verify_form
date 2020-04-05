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

export const isContractNumber = (payload, dispatch) => (dispatch({
    type: types.IS_CONTRACT_NUMBER,
    payload: payload
}));

export const setContractNumber = (payload, dispatch) => (dispatch({
    type: types.SET_CONTRACT_NUMBER,
    payload: payload
}));