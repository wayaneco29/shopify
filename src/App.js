import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

import './App.css';

const Hats = () => {
  return (
    <h1>Hello</h1>
  )
}

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={Hats} />
      </div >
    )
  }
}
export default App;
