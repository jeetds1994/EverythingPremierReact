import React from 'react'
import Fixtures from './components/Fixtures'
import Standings from './components/Standings'
import TeamGrid from './components/TeamGrid'

class Homepage extends React.Component{
  constructor(){
    super()
    this.state = {
      teamData: [],
      fixtures: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/teams')
    .then(resp => resp.json())
    .then(teamData => this.setState({ teamData },
    () => fetch('http://localhost:3000/fixtures')
    .then(resp => resp.json())
    .then(fixtures => {
      let teamData = this.state.teamData
      fixtures.map(fixture => {
	       fixture["hometeam"] = teamData.find(team => team.id === parseInt(fixture.home_team_id)).name
	        fixture["awayteam"] = teamData.find(team => team.id === parseInt(fixture.away_team_id)).name
	     return fixture})
      this.setState({ fixtures}
    ,() => console.log(this.state.fixtures))})))
  }



  render(){
    return(
      <div className="ui four column grid">
        <div className="row">
            <div className="column four wide" id="column1">
              {/* Standings */}
              <Standings standings={this.state.teamData}/>
              </div>
              <div className="column one wide"></div>
              <div className="column eleven wide" id="column2">
                {/* Fixtures */}
                <Fixtures teamData={this.state.teamData} fixtures={this.state.fixtures}/>
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
