import React, { Component } from "react";
import ListVehicles from "../ListVehicles/ListVehicles";
import Loading from "../Loading/Loading";
import "./Body.css";

const OPTIONS_TO_CONNECT_WS = { timeout: 10000 };
//const WS_URL = "http://10.0.0.25:3001/informationVehicles";
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      vehicles: [],
      error: null
    };
  }

  loadProducts = () => {
    this.setState({
      loading: true,
      error: null
    });
    fetch(process.env.REACT_APP_URL_WS_GET_INFORMATION, OPTIONS_TO_CONNECT_WS)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          vehicles: data
        });
      })
      .catch(errorResponse => {
        console.log("Error, ", errorResponse);
        this.setState({
          error: "Error to get the information",
          loading: false
        });
      });
  };

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    return (
      <div data-testid="body">
        {this.state.error != null && (
          <span className="error">{this.state.error}</span>
        )}
        {this.state.loading && <Loading />}
        {!this.state.loading &&
          this.state.error == null && (
            <ListVehicles vehicles={this.state.vehicles} />
          )}
      </div>
    );
  }
}
