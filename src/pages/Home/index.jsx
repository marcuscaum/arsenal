import React, { Component } from 'react';
import { Champions } from '../../actions/';


class PureHome extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(Champions.getAll());
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
      </div>
    )
  }
}

export const Home = PureHome;
