import { Component } from "react-dom";
import { Link } from "react-router-dom";
import React from "react";
import Menue from "../components/Navbar";
import Button from "../components/Button";
class Home extends React.Component {
  render() {
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
                    <th scope="col">Date de néssance</th>
                    <th scope="col">Numéro de téléphone</th>
                    <th scope="col">Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2022</td>
                    <td>1000</td>
                    <td>2000</td>
                    <td>1500</td>

                    <td>
                      <Button content="Consulter"></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>1000</td>
                    <td>2000</td>
                    <td>1500</td>

                    <td>
                      <Button content="Consulter"></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>1000</td>
                    <td>2000</td>
                    <td>1500</td>

                    <td>
                      <Button content="Consulter"></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>1000</td>
                    <td>2000</td>
                    <td>1500</td>

                    <td>
                      <Button content="Consulter"></Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
