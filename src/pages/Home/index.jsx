import React, { Component } from 'react';
import { Champions } from '../../actions/';

import { ChampionsList } from './components';

class PureHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      champions: {},
      items: {},
    };
  }

  componentDidMount() {
    Champions
      .getAll()
      .then(data => this.setState({ champions: data }));
  }

  render() {
    return (
      <div className='content'>
        <ChampionsList filter='Mage' images='http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'type='image' items={this.state.champions.data} />
      </div>
    )
  }
}

export const Home = PureHome;
