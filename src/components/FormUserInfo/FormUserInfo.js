import React, { Component } from "react";
import Loading from "../Loading/Loading";
import "./FormUserInfo.css";

//const WS_URL = "http://10.0.0.25:3001/insertMaintenance";

export default class FormUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      successfulRegistration: false,
      showMessage: false,
      colorMessage: "blue",
      messageRegistration: "",
      loading: false,
      ticket: ""
    };
  }

  sendUserInformation = async event => {
    event.preventDefault();
    const data = new FormData(document.getElementById("formUserInformation"));
    var userInformation = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      estimatedDate: data.get("estimatedDate"),
      idVehicle: data.get("id")
    };
    //Validate the information
    var isValid = this.isValidUserInformation(userInformation);
    if (isValid) {
      this.setState({
        error: false
      });
      //Send information to WS

      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        timeout: 5000,
        body: JSON.stringify({
          userInformation
        })
      };
      var color = "red";
      var message = "Error to register information";
      var success = false;
      var ticket = "";
      try {
        this.setState({ loading: true });
        const fetchResponse = await fetch(
          process.env.REACT_APP_URL_WS_CREATE_MAINTENANCE,
          settings
        );
        const response = await fetchResponse.json();
        color = "blue";
        message = "Successful registration";
        success = true;
        ticket = response.idRecord;
      } catch (error) {
        console.log("Error to insert a new Maintenance register, ", error);
      }

      this.setState({
        showMessage: true,
        colorMessage: color,
        messageRegistration: message,
        loading: false,
        successfulRegistration: success,
        ticket
      });
    } else {
      this.setState({
        error: true
      });
    }
  };

  isValidUserInformation = information => {
    if (!this.isEmptyField(information.firstName)) {
      return false;
    } else if (!this.isEmptyField(information.lastName)) {
      return false;
    } else if (!this.isEmptyField(information.address)) {
      return false;
    } else if (!this.isEmptyField(information.estimatedDate)) {
      return false;
    }
    return true;
  };

  isEmptyField = field => {
    if (field === undefined || field.length === 0) {
      return false;
    }
    return true;
  };

  render() {
    return (
      <div className="div-form">
        <hr />
        <form id="formUserInformation" onSubmit={this.sendUserInformation}>
          <label>First name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Write your fistname"
          />
          <br />
          <label>Last name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Write your lastname"
          />
          <br />
          <label>Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Write your address"
          />
          <br />
          <label>Estimated delivery date: </label>
          <input
            type="text"
            id="estimatedDate"
            name="estimatedDate"
            placeholder="2021/06/15"
          />
          <div className="wrapper">
            {this.state.error && (
              <label className="error"> All fields are required</label>
            )}
            {this.state.showMessage && (
              <span style={{ color: this.state.colorMessage }}>
                {this.state.messageRegistration}
              </span>
            )}
            <br />
            {this.state.showMessage &&
              this.state.successfulRegistration && (
                <label>
                  <strong>Ticket: {this.state.ticket}</strong>
                </label>
              )}
            <br />
            {this.state.loading && <Loading />}
            {!this.state.showMessage && (
              <button
                className="button-format"
                onClick={this.sendUserInformation}
                type="submit"
              >
                Maintenance
              </button>
            )}
          </div>
          <input type="hidden" name="id" value={this.props.idVehicle} />
        </form>
      </div>
    );
  }
}
