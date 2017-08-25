import React, { Component } from 'react';
import { Champions } from '../../actions/';


class PureHome extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Champions
      .getAll()
      .then(data => this.setState(data));
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export const Home = PureHome;
