import http from "../http-common";
import axios from "axios";

class RenderVousDataService {
  getAll(id) {
    return http.get(`medecin/${id}`);
  }
}
export default new RenderVousDataService();
