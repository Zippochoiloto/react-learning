import React, { Component } from "react";
import "./TodoItem.css";
var classNames = require("classnames");

class TodoItem extends Component {
  render() {
    var className = classNames({
      TodoItem: true,
      "TodoItem-complete": this.props.item.isComplete,
      // 'btn-over': !this.state.isPressed && this.state.isHovered
    });
    // const { item } = this.props;
    // let className = "TodoItem";

    return <div className={className}>{this.props.item.title}</div>;
  }
}

export default TodoItem;
