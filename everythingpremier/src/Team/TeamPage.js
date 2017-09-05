import React from 'react'
import TeamInfo from './components/TeamInfo'
import Matches from './components/Fixtures'
import Players from './components/Players'


class TeamPage extends React.Component{
  constructor(){
    super()
    this.state = {
      pageID: 0,
      teamData: {},
      home_games: [],
      away_games: [],
      matches: [],
      players: []
    }
  }

  componentDidMount(){
    let pageID = window.location.href.replace("http://localhost:3001/teams/", "") //the 10 is base number system
    if(window.location.href.includes("http://localhost:3001/teams/")){

    let url = "http://localhost:3000/teams/" + pageID
    fetch(url).then(resp => resp.json())
    .then(teamData => {
      this.setState({
        pageID: pageID,
        teamData: teamData.team,
        home_games: teamData.home_games,
        away_games: teamData.away_games,
        matches: teamData.matches,
        players: teamData.players
      }, () => console.log(this.state))
    })
  }else{
    window.location = "http://localhost:3001"
  }
  }

  render(){
    return(
      <div id="teamPage">
      <div className="ui four column grid">
        <div className="row">
            <div className="column four wide" id="column1team">
            <img id="teamLogo" src={this.state.teamData.image_url} alt={this.state.teamData.name}/>
            </div>

            <div className="column one wide">


            </div>

            <div className="column ten wide">
            <TeamInfo teamName={this.state.teamData.name} bio={this.state.teamData.bio}/>
            </div>
            <div className="row">

            <Matches home_games={this.state.home_games} away_games={this.state.away_games} matches={this.state.matches}/>
            </div>

          <div className="column">
            <Players players={this.state.players}/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default TeamPage
