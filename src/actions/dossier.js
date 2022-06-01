import { GET_STATE } from "./types";
import DossierService from "../services/dossier";
export const get = (id) => async (dispatch) => {
  try {
    const res = await DossierService.getAll(id);
    console.log(res.data.data);
    dispatch({
      type: GET_STATE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
