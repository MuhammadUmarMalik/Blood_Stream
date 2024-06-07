import {Move_To_Login, Move_To_Signup} from './constant';

export function moveToLogin(item) {
  return {
    type: Move_To_Login,
    payload: item,
  };
}

export function moveToSignup(item) {
  return {
    type: Move_To_Signup,
    payload: item,
  };
}
