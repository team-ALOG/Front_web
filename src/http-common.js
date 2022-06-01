import axios from "axios";
export default axios.create({
  baseURL: "https://9051-129-45-37-149.eu.ngrok.io",
  headers: {
    "Content-type": "application/json",
  },
});
