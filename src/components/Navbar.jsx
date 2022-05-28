import {
  Dropdown,
  NavLink,
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Btn from "../components/Button";
import logo from "../lg.png";
import "../style.css";
import styled from "styled-components";
import Inp from "../components/Input";

function Menue() {
  return (
    <Navbar style={{ paddingLeft: "50px", paddingRight: "50px" }} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Logo src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              style={{
                color: "#fff",
                fontWeight: "600",
                paddingRight: "80px",
              }}
              href="#action1"
            >
              Mes Rendez-vous
            </Nav.Link>
            <Nav.Link
              style={{
                color: "#fff",
                fontWeight: "600",
                merginLeft: "100px",
              }}
              href="#action2"
            >
              Mon Profile
            </Nav.Link>
          </Nav>

          <ButtonContainer>
            <Btn content="Déconnecter"></Btn>
          </ButtonContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const Logo = styled.img`
  width: 150px;
`;
const ButtonContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  height: 20%;
`;
export default Menue;
