import action from "../constants/user.constant";

const {SET_NAME, SET_AGE} = action;

const nameAction = (value) => {
  return {
    type : SET_NAME,
    payload : value
  }
}

const ageAction = (value) => {
  return {
    type : SET_AGE,
    payload : value
  }
}

export {nameAction, ageAction}