import  React from 'react'
import Players from './components/Players'
import MyPlayers from './components/MyPlayers'

class UnlockedLeagueView extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedPlayers: []
    }
  }

  addToSelected = (event) => {
    let id = event.currentTarget.id
    let selectedPlayer = this.props.players.find(player => player.id == id)
    this.setState({
      selectedPlayers: [...this.state.selectedPlayers, selectedPlayer]
    }, () => console.log(this.state.selectedPlayers))
  }

  lockLeague = () => {
    fetch()
  }
  render(){
    return(
      <div>
      <h1>Unlocked</h1>
      <img onClick={this.lockLeague} id="lock" src="./unlocked.svg" alt="lock"/>
      <h1>Click Lock to Lock League</h1>
      <p>Warning: Once you lock the league you can no longer add/remove players or squads.</p>
      <div className="ui two column grid">

      <div className="column six wide">
        <h1>My Players:</h1>
        <MyPlayers  selectedPlayers={this.state.selectedPlayers}/>
      </div>

      <div className="column six wide">
        <Players players={this.props.players.filter(player => player)} updateMyPlayers={this.updateMyPlayers} addToSelected={this.addToSelected}/>
      </div>


      </div>
      </div>
    )
  }
}

export default UnlockedLeagueView
