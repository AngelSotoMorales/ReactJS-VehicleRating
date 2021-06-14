import React, { Component } from "react";
import loading from "../../images/loading.gif";
import "./Loading.css";

export default class Loading extends Component {
  render() {
    return (
      <div className="center">
        <img alt="loading" src={loading} className="image-style" />
      </div>
    );
  }
}
