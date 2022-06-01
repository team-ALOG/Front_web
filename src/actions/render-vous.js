import { ALL_RENDERVOUS } from "./types";
import RenderVousDataService from "../services/rander-vous.service";
export const getALL = (id) => async (dispatch) => {
  try {
    const res = await RenderVousDataService.getAll(id);

    dispatch({
      type: ALL_RENDERVOUS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};
