import React, { Component } from "react";
import Vehicle from "../Vehicle/Vehicle";
import "./ListVehicles.css";

export default class ListVehicles extends Component {
  render() {
    return (
      <div className="div-margin-list">
        <div className="text">
          <hr />
          <h2>
            Vehicles | <span className="grayColor">Rating</span>
          </h2>
          <hr />
        </div>
        <div>
          {this.props.vehicles.map(vehicle => (
            <Vehicle
              key={`id_${vehicle.id}...`}
              make={vehicle.make}
              model={vehicle.model}
              description={vehicle.description}
              estimatedate={vehicle.estimatedate}
              id={vehicle.id}
              image={vehicle.image}
              km={vehicle.km}
            />
          ))}
        </div>
      </div>
    );
  }
}
