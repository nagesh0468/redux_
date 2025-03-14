import { resolvePath } from "react-router-dom";

let action = {
  SET_PRODUCTS : 'SET_PRODUCTS',
  SET_LOADING : "SET_LOADING",
  SET_ERROR : "SET_ERROR",
  RESET_PRODUCTS : "RESET_PRODUCTS",
  RESET_ALL : "RESET_ALL"
}

Object.freeze(action);

export default action;