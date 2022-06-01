import axios from "axios";
const API_URL = "https://9051-129-45-37-149.eu.ngrok.io/";
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "api/connectionMed", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(localStorage.getItem("user"));
        }
        console.log(localStorage.getItem("user"));
        return response.data;
      });
  }
}
export default new AuthService();
