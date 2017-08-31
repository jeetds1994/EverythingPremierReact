import React, { Component } from 'react';

import './App.css';

import Homepage from './Homepage/Homepage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" render={() => <Homepage />} />
      </Router>
      </div>
    );
  }
}

export default App;
