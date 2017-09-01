import React, { Component } from 'react';

import './App.css';

import Homepage from './Homepage/Homepage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TeamPage from './Team/TeamPage'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/teams" render={() => <TeamPage />} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
