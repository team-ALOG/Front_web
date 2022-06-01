import { ALL_RENDERVOUS } from "../actions/types";
const initialState = [];
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ALL_RENDERVOUS:
      console.log(payload);
      return payload;

    default:
      return state;
  }
}
