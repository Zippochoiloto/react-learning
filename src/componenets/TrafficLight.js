import React, { Component } from "react";
import "./Trafficlight.css";
import classNames from "classnames";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this, event);
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { currentColor } = this.props;
    // console.log("Rendering ...", currentColor);
    return (
      <div className="TrafficLight">
        <div
          className={classNames("bulb", "red", {
            active: currentColor === RED,
          })}
        />
        <div
          className={classNames("bulb", "orange", {
            active: currentColor === ORANGE,
          })}
        />
        <div
          className={classNames("bulb", "green", {
            active: currentColor === GREEN,
          })}
        />
        <form>
          <label>Name</label>
          <input
            type="text"
            // value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <p>{this.state.value}</p>
        </form>
      </div>
    );
  }
}

export default TrafficLight;
