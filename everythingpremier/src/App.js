import React, { Component } from 'react';

import './App.css';

import Homepage from './Homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TeamPage from './Team/TeamPage';
import PlayerPage from './Player/PlayerPage';



class App extends Component {

  logo = () => {
    return (
      <div>
        <img id="logo" src="logo_black.svg" alt="logo"/>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
      <Router>
        <div>

          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/teams" render={() => <TeamPage />} />
          <Route path="/players" render={() => <PlayerPage />} />
       </div>
      </Router>
      </div>
    );
  }
}

export default App;
