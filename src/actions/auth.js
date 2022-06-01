import { LOGIN_SUCCESS, LOGIN_FAIL, SET_MESSAGE } from "./types";
import AuthService from "../services/authentification.service";
/* import bcrypt from 'bcryptjs'
const sal=bcrypt.genSaltSync(10) */
export const login = (username, password) => (dispatch) => {
  // const motpass=bcrypt.hashSync(password,'$2a$10$CwTycUXWYUGYUFTFYFF')
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
