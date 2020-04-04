import * as types from "./types";
import createReducer from "../../utils/createReducer";

const initialState = {
    brand: "TOYOTA_FINANCE"
};

const brandReducer = createReducer(initialState)({
    [types.SET_BRAND]: ({ brand }) => {
        return {
            ...initialState,
            brand: brand
        };
    }
})

export default brandReducer