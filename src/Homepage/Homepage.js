import React from 'react'
import Fixtures from './components/Fixtures'
import Standings from './components/Standings'
import TeamGrid from './components/TeamGrid'
import Search from './components/Search'
import Adapter from './Adapters/Adapter'



class Homepage extends React.Component{
  constructor(){
    super()
    this.state = {
      teamData: [],
      fixtures: []
    }
  }

  componentDidMount(){
    //call Adapter to fetch team data, and fixtures
    Adapter.fetchTeams()
    .then(teamData => this.setState({ teamData },
    () => Adapter.fetchFixtures()
    .then(fixtures => {
      let teamData = this.state.teamData
      fixtures.map(fixture => {
	       fixture["hometeam"] = teamData.find(team => team.id === parseInt(fixture.home_team_id, 10)).name
	        fixture["awayteam"] = teamData.find(team => team.id === parseInt(fixture.away_team_id, 10)).name
          fixture["hometeamimage"] = teamData.find(team => team.id === parseInt(fixture.home_team_id, 10)).image_url
 	        fixture["awayteamimage"] = teamData.find(team => team.id === parseInt(fixture.away_team_id, 10)).image_url
	     return fixture})
      this.setState({ fixtures}
    ,() => console.log(this.state.fixtures))})))
  }



  render(){
    return(
      <div id="intro">

          <div id="content">
            <img id="background" src="/field.jpg" alt="home"/>
            <img id="logo" src="/logo_white.svg" alt="logo"/>
            <h1 id="motto">For quick info about the Barclays Premier League.</h1>
            <Search teamData={this.state.teamData}/>


          <div>

          </div>
        </div>


      <div className="ui four column grid">
        <div className="row">
            <div className="column six wide" id="column1home">
              {/* Standings */}
              <Standings standings={this.state.teamData}/>
              </div>
              <div className="column ten wide" id="column2">
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
    </div>
    )
  }
}

export default Homepage;
