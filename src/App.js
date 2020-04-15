import React, { Component } from "react";
import "./App.css";
import TodoItem from "./componenets/TodoItem";
import TrafficLight from "./componenets/TrafficLight";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor() {
    super();
    const todoItems = ["Work", "Play", "Sleep"];
    this.state = {
      currentColor: GREEN,
    };
    setInterval(() => {
      // console.log(this.state.currentColor);
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor),
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }
  render() {
    return (
      <div className="App">
        {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
        {this.todoItems.length === 0 && "Nothing here"}
        <TrafficLight currentColor={this.state.currentColor} />}
      </div>
    );
  }
}

export default App;
