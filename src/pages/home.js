import { Component } from "react-dom";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Menue from "../components/Navbar";
import Button from "../components/Button";
import Preloder from "../components/Preloder";
import { getALL } from "../actions/render-vous";
import { connect } from "react-redux";
import { get } from "../actions/dossier";
class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.state.dossier);
  }

  render() {
    const table = this.props.state.renderVous;
    return (
      <>
        <Menue />;
        <div className="bg">
          <div className="glass">
            <h1> voici la Liste de vous rendes-vous d'haujoduit</h1>

            <div>
              <table
                style={{ borderCollapse: "unset" }}
                className="table table-hover thead-light mb-0"
              >
                <thead>
                  <tr>
                    <th scope="col">Nom </th>
                    <th scope="col">Prénom </th>
                    <th scope="col">email</th>
                    <th scope="col">Numéro de téléphone</th>
                    <th scope="col">Action </th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((item, i) => (
                    <tr key={i}>
                      <td>{item.nom}</td>
                      <td>{item.prenom}</td>

                      <td> {item.email} </td>
                      <td> {item.email} </td>
                      <td>{item.numero_telephone}</td>

                      <td>
                        <Link to="/DossierMedicale">
                          <Button
                            content="Consulter"
                            OnClick={this.props.get(item.numero_dossier)}
                          ></Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);

  return {
    state,
  };
}
export default connect(mapStateToProps, { getALL, get })(Home);
