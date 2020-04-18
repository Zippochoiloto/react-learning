import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
    this.state = {
      isShowing: true,
    };
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
    let url = checkImg;
    console.log(this.state.isShowing);
    console.log(this.props.children);
    if (item.isComplete) {
      url = checkCompleteImg;
    }
    return (
      <div
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
      >
        <img onClick={onClick} width={32} alt="" src={url} />
        {this.props.item.title}

        <div className="Content">{this.props.children}</div>
      </div>
    );
  }
}

export default TodoItem;
