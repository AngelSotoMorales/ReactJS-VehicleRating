import React, { Component } from "react";
import FormUserInfo from "../FormUserInfo/FormUserInfo";
import "./Vehicle.css";

const ORIGINAL_COLOR = "white";
const CHANGED_COLOR = "azure";

export default class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backGroundColor: "white"
    };
  }

  toMaintenance = element => {
    this.setState({
      backGroundColor:
        this.state.backGroundColor === ORIGINAL_COLOR
          ? CHANGED_COLOR
          : ORIGINAL_COLOR
    });
  };

  render() {
    return (
      <div
        className="card-vehicle container-glass"
        style={{ backgroundColor: this.state.backGroundColor }}
      >
        <img
          alt="ImageCar"
          className="image-vehicle"
          src={this.props.image}

        />
        <div className="div-margin">
          <span>
            <strong>Make:</strong> {this.props.make}
          </span>
          <br />
          <span>
            <strong>Model:</strong> {this.props.model}
          </span>
          <br />
          <span>
            <strong>Description:</strong> {this.props.description}
          </span>
          <br />
          <span>
            <strong>Estimate Date:</strong> {this.props.estimatedate}
          </span>
          <br />
          <span>
            <strong>ID:</strong> {this.props.id}
          </span>
          <br />
          <span>
            <strong>Km: </strong>
          </span>
          <span>{this.props.km}</span>
          <br />
          <input
            onClick={this.toMaintenance.bind(this)}
            id={this.props.id}
            type="checkbox"
            name="maintenance"
          />
          <label htmlFor={this.props.id}>Maintenance</label>
          {this.state.backGroundColor === CHANGED_COLOR && (
            <FormUserInfo idVehicle={this.props.id} />
          )}
        </div>
      </div>
    );
  }
}
