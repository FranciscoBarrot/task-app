import React, { Component } from 'react';

export default class Overview extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}