import decode from "jwt-decode";
import * as types from "./types";
import createReducer from "../../utils/createReducer";

import { getUserType } from "../../../utilities";

const initialState = {
  email:'',
  isContractNumber:'',
  isRegisterNumber:null,
  contractNumber:null,
  registerNumber:null
};

const signInReducer = createReducer(initialState)({
    [types.SIGN_IN]: ({ token }) => {
      const { user_id: id, aud: role, status } = decode(token);
  
      return {
        token,
        id,
        type: getUserType(role),
        role,
        status
      };
    },
    [types.SET_EMAIL]: (state, { payload }) => {  
      return {
        ...state,
        email: payload
      };
    },
    [types.IS_CONTRACT_NUMBER]: (state, { payload }) => {  
      return {
        ...state,
        isContractNumber: payload
      };
    },
    [types.IS_REGISTER_NUMBER]: (state, { payload }) => {  
      return {
        ...state,
        isRegisterNumber: payload
      };
    },
    [types.SET_CONTRACT_NUMBER]: (state, { payload }) => {  
      return {
        ...state,
        contractNumber: payload
      };
    },
})

export default signInReducer;