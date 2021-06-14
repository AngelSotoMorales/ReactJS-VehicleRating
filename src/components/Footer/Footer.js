import React, { Component } from "react";
import logo from "../../images/vw.png";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div data-testid="footer" className="row div-center">
          <hr className="hr-footer" />
          <div className="column">
            <span className="color-header">Company</span>
            <p>About</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="column">
            <img alt="logo" src={logo} className="img-logoFooter" />
          </div>
          <div className="column">
            <span className="color-header">Social</span>
            <div>
              <p>Follow us on Instagram</p>
            </div>
          </div>
        </div>
        <hr className="hr-footer" />
      </React.Fragment>
    );
  }
}
