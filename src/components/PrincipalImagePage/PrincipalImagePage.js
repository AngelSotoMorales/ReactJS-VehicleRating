import React, { Component } from "react";
import "./PrincipalImagePage.css";
import car from "../../images/car.jpg";

export default class PrincipalImagePage extends Component {
  render() {
    const backGroundImage = {
      backgroundImage: "url(" + car + ")"
    };

    return (
      <div className="div_principal" style={backGroundImage}>
        <div className="p_principalText">
          <div>
            <h1>{this.props.title}</h1>
          </div>
          <div>
            <h3>{this.props.subtitle1}</h3>
          </div>
        </div>
      </div>
    );
  }
}
