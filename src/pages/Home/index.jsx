import React, { Component } from 'react';
import { Champions } from '../../actions/';

class PureHome extends Component {

  componentDidMount() {
    Champions
      .getAll()
      .then(data => this.state = data);
  }

  render() {
    console.log(this.state);
    return (
      <div>
      </div>
    )
  }
}

export const Home = PureHome;
