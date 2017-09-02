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
    let pageID = parseInt(window.location.href.replace("http://localhost:3001/teams/", ""), 10) //the 10 is base number system
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
  }

  render(){
    return(
      <div>
        <div className="row">
            <div className="column four wide" id="column1">
            <img src={this.state.teamData.image_url} alt={this.state.teamData.name}/>
            <TeamInfo teamName={this.state.teamData.name} bio={this.state.teamData.bio}/>
            </div>

            <div className="column one wide">


            </div>

            <div className="column five wide" id="column2">
              <Matches home_games={this.state.home_games} away_games={this.state.away_games} matches={this.state.matches}/>
            </div>
            <div className="row">

            </div>

          <div className="column">
            <Players players={this.state.players}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamPage
