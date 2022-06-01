import axios from "axios";
export default axios.create({
  baseURL: "https://9904-129-45-36-44.eu.ngrok.io",
  headers: {
    "Content-type": "application/json",
  },
});
