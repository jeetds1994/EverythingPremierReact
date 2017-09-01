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



  render(){
    return(
      <div className="ui four column grid">
        <div className="row">
            <div className="column four wide" id="column1">

              {/* Logo */}
              {this.props.logo()}
              
              {/* Standings */}
              <Standings standings={this.state.teamData}/>
              </div>
              <div className="column one wide"></div>
              <div className="column eleven wide" id="column2">
                {/* Fixtures */}
                <Fixtures fixtures={this.state.teamData}/>
                {/* TeamGrid */}
                <TeamGrid teams={this.state.teamData}/>
              </div>
              <div className="row">

              </div>

            <div className="column"></div>
        </div>
      </div>
    )
  }
}

export default Homepage;
