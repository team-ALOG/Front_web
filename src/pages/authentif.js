import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Input from "../components/Input";
import logo from "../lg.png";
import { Component } from "react-dom";
import "../style.css";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../actions/auth";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      password: "",
      email: "",
      validate: false,
    };
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  submit = (e) => {
    e.preventDefault();
    if (
      this.state.email != "" &&
      this.state.password != " " &&
      this.state.validate == true
    ) {
      const { dispatch, history } = this.props;

      dispatch(login(this.state.email, this.state.password))
        .then(() => {
          console.log("connected");
        })
        .catch(() => {
          console.log("errrrrrrrrrror");
        });
    }
  };
  render() {
    console.log(this.props);
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Navigate to="/Home" />;
    }
    return (
      <Boody className="Boody">
        <MainContainer>
          <WelcomeText>Welcome to </WelcomeText>
          <Logo src={logo} alt="" />
          <Form
            onSubmit={this.submit}
            ref={(c) => {
              this.form = c;
            }}
          >
            <Form.Group className="mb-3" controlId="validationCustom01">
              <InputGroup>
                <Form.Control
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    borderRadius: "2rem",
                    width: "80%",
                    height: "3rem",
                    padding: "1rem",
                    border: "none",
                    outline: "none",
                    color: "#3c354e",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                  required
                  type="email"
                  placeholder="Addresse e-mail"
                  onChange={(e) => this.onChangeEmail(e)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <InputGroup>
                <Form.Control
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    borderRadius: "2rem",
                    width: "80%",
                    height: "3rem",
                    padding: "1rem",
                    border: "none",
                    outline: "none",
                    color: "#3c354e",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                  required
                  type="password"
                  placeholder="password"
                  onChange={(e) => this.onChangePassword(e)}
                />
              </InputGroup>
            </Form.Group>

            <ButtonContainer>
              <Button
                type="submit"
                onClick={(this.state.validate = true)}
                content="Sign Up"
              />
              {/* <Link
                style={{ width: "300px", textAlign: "center" }}
                to="/Home"
              ></Link> */}
            </ButtonContainer>
          </Form>
        </MainContainer>
      </Boody>
    );
  }
}

const Boody = styled.div``;
const Logo = styled.img`
  width: 200px;
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 0 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;

  return {
    isLoggedIn,
    message,
  };
}
export default connect(mapStateToProps)(Login);
