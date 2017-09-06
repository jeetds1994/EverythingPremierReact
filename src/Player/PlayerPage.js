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
    let pageID = window.location.href.replace("https://everythingpremier.herokuapp.com/players/", "") //the 10 is base number system
    if(window.location.href.includes("https://everythingpremier.herokuapp.com/players")){

    let url = "https://everythingpremierapi.herokuapp.com/players/" + pageID
    fetch(url).then(resp => resp.json())
    .then(data => {
      this.setState({
        pageID: pageID,
        player: data.player,
        stats: data.stats
      })
    })
    }else{
      window.location = "https://everythingpremier.herokuapp.com/"
    }
  }

  render(){
    return(
      <div id="playerPage">
          <div id="surroundContainer">
            <div id="playerview1">
              <div className="ui two column grid">
                <div className="column eight wide">
                  <img src={this.state.player.image_url} alt={this.state.player.name}/>
                </div>
                <div className="column eight wide">
                  <h1 id="bio"  >{this.state.player.bio}</h1>
                </div>
              </div>
            </div>

            <div id="playerview2">
              <Stats stats={this.state.stats}/>
            </div>


          </div>



      </div>
    )
  }
}
export default PlayerPage
