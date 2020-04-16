import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }
  onItemClick() {
    this.props.item.isComplete = !this.props.item.isComplete;
  }
  render() {
    // var className = classNames({
    //   TodoItem: true,
    //   "TodoItem-complete": this.props.item.isComplete,
    //   // 'btn-over': !this.state.isPressed && this.state.isHovered
    // });
    // const { item } = this.props;
    // let className = "TodoItem";
    const { item, onClick } = this.props;
    return (
      <div
        onClick={onClick}
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
      >
        {this.props.item.title}
      </div>
    );
  }
}

export default TodoItem;
