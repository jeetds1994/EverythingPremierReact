import React from 'react'
import TeamInfo from './components/TeamInfo'
import Matches from './components/Fixtures'
import Players from './components/Players'
import Goals from './components/Goals'


class TeamPage extends React.Component{
  constructor(){
    super()
    this.state = {
      pageID: 0,
      teamData: {},
      home_games: [],
      away_games: [],
      matches: [],
      players: [],
      teams: [],
      videos: []
    }
  }

  componentDidMount(){
    let pageID = window.location.href.replace("http://localhost:3001/teams/", "") //the 10 is base number system
    if(window.location.href.includes("http://localhost:3001/teams/")){

    let url = "http://localhost:3000/teams/" + pageID
    fetch(url).then(resp => resp.json())
    .then(teamData => {
      teamData.matches.map((fixture) => {
        fixture["hometeam"] = teamData.teams.find(team => team.id === parseInt(fixture.home_team_id, 10)).name
         fixture["awayteam"] = teamData.teams.find(team => team.id === parseInt(fixture.away_team_id, 10)).name
         fixture["hometeamimage"] = teamData.teams.find(team => team.id === parseInt(fixture.home_team_id, 10)).image_url
         fixture["awayteamimage"] = teamData.teams.find(team => team.id === parseInt(fixture.away_team_id, 10)).image_url
      return fixture})

      this.setState({
        pageID: pageID,
        teamData: teamData.team,
        home_games: teamData.home_games,
        away_games: teamData.away_games,
        matches: teamData.matches,
        players: teamData.players,
        teams: teamData.teams
      }, () => console.log(this.state))
    })
    .then(() => {
      var find = ' ';
      var re = new RegExp(find, 'g');
      let url = "http://goalposts-api.herokuapp.com/api/v1/highlights/search?title=" + this.state.teamData.name.toLowerCase().replace("fc", "")
      fetch(url)
      .then(resp => resp.json())
      .then(videos => this.setState({videos}))
    })
  }else{
    window.location = "http://localhost:3001"
  }
  }

  render(){
    return(
      <div id="teamPage">


          <div id="surroundContainer">
            <div id="view1">
              <div className="ui two column grid">

                <div className="column eight wide">
                  <img id="teamLogo" src={this.state.teamData.image_url} alt={this.state.teamData.name}/>
                </div>

                <div className="column eight wide">
                  <TeamInfo teamName={this.state.teamData.name} bio={this.state.teamData.bio}/>
                </div>

              </div>
            </div>

            <div id="view2">

              <Matches home_games={this.state.home_games} away_games={this.state.away_games} matches={this.state.matches}/>
              
              <Goals videos={this.state.videos} />

            </div>


          </div>



      </div>
    )
  }
}

export default TeamPage

//
// <div className="ui four column grid">
//   <div className="row1team">
//       <div className="column four wide">
//       <img id="teamLogo" src={this.state.teamData.image_url} alt={this.state.teamData.name}/>
//       </div>
//
//       <div className="column one wide">
//
//
//       </div>
//
//       <div className="column ten wide">
//       <TeamInfo teamName={this.state.teamData.name} bio={this.state.teamData.bio}/>
//
//
//       <Matches home_games={this.state.home_games} away_games={this.state.away_games} matches={this.state.matches}/>
//       </div>
//
//       <Goals videos={this.state.videos} />
//       <div className="row">
//
//
//       </div>
//
//     <div className="column">
//       <Players players={this.state.players}/>
//
//
//     </div>
//   </div>
// </div>
