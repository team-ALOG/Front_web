import { Component } from "react-dom";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Menue from "../components/Navbar";
import Button from "../components/Button";
import Preloder from "../components/Preloder";
import SinglePagePDFViewer from "./single-page";
import AllPagesPDFViewer from "./all-pages";
import { getALL } from "../actions/render-vous";
import { connect } from "react-redux";
import { get } from "../actions/dossier";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../simple.pdf";
class Dossier extends React.Component {
  render() {
    console.log(this.props.state.dossier.locked);

    const l = this.props.state.dossier.locked;

    return (
      <>
        {l && l == false ? (
          <div className="App">
            <h4>Le Dossier Médicale du patient en Pdf</h4>
            <SinglePagePDFViewer pdf={samplePDF} />
          </div>
        ) : (
          <Preloder />
        )}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps, { getALL, get })(Dossier);
