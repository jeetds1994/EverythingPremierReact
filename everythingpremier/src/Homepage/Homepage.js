import React from 'react'
import Fixtures from './components/Fixtures'
import Standings from './components/Standings'
import TeamGrid from './components/TeamGrid'

class Homepage extends React.Component{
  constructor(){
    super()
    this.state = {
      teamData: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/teams')
    .then(resp => resp.json())
    .then(teamData => this.setState({ teamData }
      ,()=> console.log(this.state.teamData)))
  }

  logo = () => {
    return (
      <img id="logo" src="https://i.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg" alt="logo"/>
    )
  }


  render(){
    return(
      <div className="ui four column grid">
        <div className="row">
            <div className="column">
              {/* Logo */}
              {this.logo()}
              {/* Standings */}
              <Standings standings={this.state.teamData}/>
              </div>
              <div className="column">
                {/* Fixtures */}
                <Fixtures fixtures={this.state.teams}/>
                <TeamGrid teams={this.state.teams}/>
              </div>

            <div className="column"></div>
        </div>
      </div>
    )
  }
}

export default Homepage;
