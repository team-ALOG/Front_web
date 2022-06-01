import { GET_STATE } from "../actions/types";
const initialState = {};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_STATE:
      console.log(payload);
      return payload;

    default:
      return state;
  }
}
