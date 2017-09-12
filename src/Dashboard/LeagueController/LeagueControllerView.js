import React from 'react'
import Matches from './components/Matches'
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
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedLeague !== ""){
      if(nextProps.selectedLeagueLocked){

      }else{
        this.fetchAllPlayers()
        // this.fetchMatches(nextProps.selectedLeague)
        // this.fetchPlayers(nextProps.selectedLeague)
      }
    }
  }

  fetchAllPlayers = () => {
    let url = 'http://localhost:3000/players'
    fetch(url, {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
    }).then(resp => resp.json())
    .then(players => {
      this.setState({players})
    })
  }

  fetchMatches = () =>{
    let url = 'http://localhost:3000/api/v1/leagues/'
    fetch(url, {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
    }).then(resp => resp.json())
    .then(data => {
      this.setState({
        league: data.league,
        squad: data.squad,
        matches: data.matches
      }, () => console.log(this.state))
    })
  }

  fetchPlayers = (leagueID) => {
    let url = 'http://localhost:3000/api/v1/squads/' + leagueID
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
          {this.props.selectedLeagueLocked && <LockedLeagueView />}
          {!this.props.selectedLeagueLocked && <UnlockedLeagueView players={this.state.players}/>}
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
