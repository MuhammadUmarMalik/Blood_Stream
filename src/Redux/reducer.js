import {Move_To_Login, Move_To_Signup} from './constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Move_To_Login:
      return [...state, action.payload];
    case Move_To_Signup:
      return [...state, action.payload];
    default:
      return state;
  }
};
