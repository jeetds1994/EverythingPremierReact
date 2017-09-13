import  React from 'react'
import Players from './components/Players'
import MyPlayers from './components/MyPlayers'

class UnlockedLeagueView extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedPlayers: []
    }
    this.lockLeague = this.lockLeague.bind(this)
  }

  addToSelected = (event) => {
    let id = event.currentTarget.id
    let selectedPlayer = this.props.players.find(player => player.id == id)
    this.setState({
      selectedPlayers: [...this.state.selectedPlayers, selectedPlayer]
    }, () => console.log(this.state.selectedPlayers))
  }

  updateLeague = () => {
    let data = new FormData()
    data.append("league_id", this.props.league.id)
    let playerIds = this.state.selectedPlayers.map(player => player.id)
    data.append("selectedPlayers", playerIds)
    fetch("https://everythingpremierapi.herokuapp.com/api/v1/leagues/update",{
      method: "POST",
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: data
    })
  }

  isOwner = () => {
    if(this.props.userData.username === this.props.league.owner){
      return true
    }else {
      return false
    }
  }

  lockLeague = (event) => {
    let data = new FormData()
    data.append("league_id", this.props.league.id)
    fetch('https://everythingpremierapi.herokuapp.com/api/v1/leagues/lock',{
      method: "POST",
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: data
    })
  }

  render(){
    return(
      <div>
      {this.isOwner() &&
        <div>
          <h1>Unlocked</h1>
          <img onClick={this.lockLeague} id="lock" src="./unlocked.svg" alt="lock"/>
          <h1>Click Lock to Lock League</h1>
          <p>Warning: Once you lock the league you can no longer add/remove players or squads.</p>
        </div>
    }
      <div className="ui two column grid">

      <div className="column six wide">
        <h1>My Players:</h1>
        <MyPlayers  selectedPlayers={this.state.selectedPlayers}/>
      </div>

      <div className="column six wide">
        <Players players={this.props.players.filter(player => player)}  addToSelected={this.addToSelected} updateLeague={this.updateLeague}/>
      </div>


      </div>
      </div>
    )
  }
}

export default UnlockedLeagueView
