import React, { Component } from 'react';
import './App.css';

import { Home } from './pages';
import { SidebarMenu } from './shared/components';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <SidebarMenu />
        <Home />
      </div>
    );
  }
}

export default App;
