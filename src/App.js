import React, { Component } from "react";
import "./App.css";
import TodoItem from "./componenets/TodoItem";
// import TrafficLight from "./componenets/TrafficLight";
import checkAll from "./img/check.svg";

// const RED = 0;
// const ORANGE = 1;
// const GREEN = 2;
class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      currentState: "all",
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
    this.returnAll = this.returnAll.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filter = this.filter.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onItemClick(item) {
    return () => {
      const isComplete = item.isComplete;
      const { todoList } = this.state;
      const index = todoList.indexOf(item);
      this.setState({
        newItem: "",
        currentState: "all",
        todoList: [
          ...todoList.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoList.slice(index + 1),
        ],
      });
    };
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: "",
        currentState: "all",
        todoList: [{ title: text, isComplete: false }, ...this.state.todoList],
      });
    }
  }

  onChange(event) {
    console.log(event.target.value);
    this.setState({
      newItem: event.target.value,
      todoList: [...this.state.todoList],
    });
    console.log(this.state);
  }

  filter() {
    this.setState({
      newItem: "",
      currentState: "complete",
      todoList: [...this.state.todoList],
    });
  }

  returnAll() {
    this.setState({
      newItem: "",
      currentState: "all",
      todoList: [...this.state.todoList],
    });
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
    let { newItem, currentState, todoList } = this.state;
    if (currentState === "complete") {
      todoList = todoList.filter((val) => val.isComplete === true);
      console.log(todoList);
    }
    return (
      <div className="App">
        <div className="Header">
          <img src={checkAll} width={32} alt="" onClick={this.filter} />
          <input
            type="text"
            placeholder="Add new Item"
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {todoList.length > 0 &&
          todoList.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClick(item)}>
              what the hell
            </TodoItem>
          ))}
        {this.state.todoList.length === 0 && "Nothing here"}
        <button onClick={this.returnAll}>Return All</button>
        {/* <TrafficLight currentColor={this.state.currentColor} /> */}
      </div>
    );
  }
}

export default App;
