import React from 'react'
import Players from './components/Players'
import NewLeague from './components/NewLeague'
import LockedLeagueView from './LockedLeague/LockedLeagueView'
import UnlockedLeagueView from './UnlockedLeague/UnlockedLeagueView'


class LeagueControllerView extends React.Component{
  constructor(){
    super()
    this.state = {
      league: [],
      matches: [],
      squad: [],
      players: [],
    }
    this.fetchMatches = this.fetchMatches.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedLeague !== ""){
      if(nextProps.selectedLeagueLocked){
        this.fetchMatches(nextProps.selectedLeague)
        this.fetchPlayers(nextProps.selectedLeague)
      }else{
        this.fetchAllPlayers()
      }
    }
  }

  fetchAllPlayers = () => {
    let url = 'https://everythingpremierapi.herokuapp.com/players'
    fetch(url, {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
    }).then(resp => resp.json())
    .then(players => {
      this.setState({players})
    })
  }

  fetchMatches = (selectedLeague) =>{
    let url = 'https://everythingpremierapi.herokuapp.com/api/v1/leagues/matches'
    let data = new FormData()
    data.append("league_id", selectedLeague.id)
    fetch(url, {
      method: 'POST',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: data
    }).then(resp => resp.json())
    .then(data => {
      debugger
      this.setState({
        league: data.league,
        squad: data.squad,
        matches: data.matches
      }, () => console.log(this.state))
    })
  }

  fetchPlayers = (leagueID) => {
    let url = 'https://everythingpremierapi.herokuapp.com/api/v1/squads/' + leagueID.id
    fetch(url, {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
    }).then(resp => resp.json())
    .then(data =>{
      this.setState({
        players: data.players,
        squad: data.squad
      })
    })
  }

  setLeagePlayers = (players) => {
    this.setState({players}, () => console.log(this.state))
  }

  initialDisplay = () => {
    let message = " <--- Select League  "
    return(
      <div>
      {this.props.selectedLeague === "" && <h1>{message}</h1>}
      {this.props.selectedLeague !== "" &&
        <div>
          {this.props.selectedLeagueLocked && <LockedLeagueView players={this.state.players} matches={this.state.matches}/>}
          {!this.props.selectedLeagueLocked && <UnlockedLeagueView players={this.state.players} league={this.props.selectedLeague} userData={this.props.userData}/>}
        </div>}

      </div>
    )
  }

  render(){
    return(
      <div>
        {this.initialDisplay()}
        {this.props.addLeagueTriggered && <NewLeague setLeagePlayers={this.setLeagePlayers}/>}
      </div>
    )
  }
}

export default LeagueControllerView
