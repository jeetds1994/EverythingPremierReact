import React from 'react'
import Stats from './components/Stats'
import PlayerInfo from './components/PlayerInfo'

class PlayerPage extends React.Component{
  constructor(){
    super()
    this.state = {
      pageID: 0,
      player: [],
      stats: []
    }
  }

  componentDidMount(){
    let pageID = window.location.href.replace("http://localhost:3001/players/", "") //the 10 is base number system
    if(window.location.href.includes("http://localhost:3001/players/")){

    let url = "http://localhost:3000/players/" + pageID
    fetch(url).then(resp => resp.json())
    .then(data => {
      this.setState({
        pageID: pageID,
        player: data.player,
        stats: data.stats
      })
    })
    }else{
      window.location = "http://localhost:3001"
    }
  }

  render(){
    return(
      <div className="ui four column grid">
        <div className="row">
            <div className="column four wide" id="column1">
              <PlayerInfo player={this.state.player}/>
            </div>

            <div className="column one wide"></div>

            <div className="column five wide" id="column2">
              <h1>{this.state.player.name}</h1>
            </div>
            <div className="row">

            </div>

          <div className="column" id="stats">
            <Stats stats={this.state.stats}/>
          </div>
        </div>
      </div>
    )
  }
}
export default PlayerPage
