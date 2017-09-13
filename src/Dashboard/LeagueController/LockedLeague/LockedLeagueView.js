import  React from 'react'
import MyPlayers from './components/MyPlayers'
import Matches from './components/Matches'
import Match from './components/Match'



class LockedLeagueView extends React.Component{

  render(){
    return(
      <div>
        <h1>Locked</h1>
        <img id="lock" src="./locked.svg" alt="lock"/>

        <div className="ui two column grid">

        <div className="column six wide">
        <h1>My Players:</h1>
        <MyPlayers players={this.props.players}/>
        </div>

        <div className="column six wide">
        <h1>Matches</h1>
        <Matches matches={this.props.matches}/>
        </div>

        </div>
      </div>
    )
  }
}

export default LockedLeagueView
