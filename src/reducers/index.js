import { combineReducers } from "redux";

import auth from "./authentification";
import message from "./message";
import renderVous from "./renderVous";
import dossier from "./dossier";
export default combineReducers({
  auth,
  message,
  renderVous,
  dossier,
});
