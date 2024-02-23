import { Typography } from "antd";
import { Button } from "antd/es/radio";
import React, { Component } from "react";

class lifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  ////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    console.log("after mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    // console.log("props or state changed");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  componentDidCatch() {
    console.log("some error");
  }

  render() {
    return (
      <div>
        <Typography.Title level={3}>{this.state.count}</Typography.Title>
        <Button
          type="primary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
          plus
        ></Button>
      </div>
    );
  }
}
