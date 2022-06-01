import http from "../http-common";
import axios from "axios";

class DossierService {
  get(id) {
    return http.get(`getstate/${id}`);
  }
}
export default new DossierService();
