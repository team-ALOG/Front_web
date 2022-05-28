import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import logo from "./logo.png";
import Login from "./pages/authentif";
import Home from "./pages/home";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
