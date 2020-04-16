import React, { Component } from "react";
import "./App.css";
import TodoItem from "./componenets/TodoItem";
import TrafficLight from "./componenets/TrafficLight";

// const RED = 0;
// const ORANGE = 1;
// const GREEN = 2;
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        { title: "Mua bim bim", isComplete: true },
        { title: "Di da bong", isComplete: false },
        { title: "Di do xang", isComplete: true },
      ],
    };

    // this.state = {
    //   currentColor: GREEN,
    // };
    // setInterval(() => {
    //   // console.log(this.state.currentColor);
    //   this.setState({
    //     currentColor: this.getNextColor(this.state.currentColor),
    //   });
    // }, 1000);

    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(item) {
    return () => {
      // let cloneState = JSON.parse(JSON.stringify(this.state));
      // console.log(cloneState);
      // cloneState.todoList[index].isComplete = !cloneState.todoList[index]
      //   .isComplete;
      // this.setState(cloneState);
      const isComplete = item.isComplete;
      const { todoList } = this.state;
      const index = todoList.indexOf(item);
      this.setState({
        todoList: [
          ...todoList.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoList.slice(index+1)
        ]
      })
    };
  }
  // getNextColor(color) {
  //   switch (color) {
  //     case RED:s
  //       return ORANGE;
  //     case ORANGE:
  //       return GREEN;
  //     default:
  //       return RED;
  //   }
  // }
  render() {
    return (
      <div className="App">
        {this.state.todoList.length > 0 &&
          this.state.todoList.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClick(item)}
            />
          ))}
        {this.state.todoList.length === 0 && "Nothing here"}
        {/* <TrafficLight currentColor={this.state.currentColor} /> */}
      </div>
    );
  }
}

export default App;
