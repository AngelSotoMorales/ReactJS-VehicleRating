import React, { Component } from "react";
import PrincipalImagePage from "../../components/PrincipalImagePage/PrincipalImagePage";

//import car from "../../images/car.jpg";

export default class Header extends Component {
  render() {
    return (
      <div data-testid="header">
        <PrincipalImagePage title={"Rating"} subtitle1={"Information"} />
      </div>
    );
  }
}
