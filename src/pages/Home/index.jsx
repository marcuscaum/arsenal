import React, { Component } from 'react';
import { Champions } from '../../actions/';

import { List } from '../../shared/components';

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
        <List items={this.state.data} />
      </div>
    )
  }
}

export const Home = PureHome;
