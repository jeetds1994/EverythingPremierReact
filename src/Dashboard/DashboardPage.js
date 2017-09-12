import React from 'react'
import Leagues from './components/Leagues'
import LeagueControllerView from './LeagueController/LeagueControllerView'

class DashboardPage extends React.Component{
  constructor(){
    super()
    this.state = {
      userData: [],
      leagues: [],
      selectedLeague: "",
      selectedLeagueLocked: false,
      addLeagueTriggered: false
    }
  }

  componentDidMount(){
    let jwt = localStorage.getItem("jwt")
    console.log(jwt)
    this.getInfo(jwt)
  }

  getInfo = (jwt) =>{
    fetch(`http://localhost:3000/api/v1/leagues`,{
      method: "GET",
      headers: {Authorization: `Bearer ${jwt}`}
    }).then(resp => resp.json())
    .then(leagues => {
      this.setState({leagues})
    })
}

  onLeagueClick = (event) => {
    let selectedLeague = event.target.value
    let selectedLeagueLocked = eval(event.target.dataset.locked)
    this.setState({selectedLeague, selectedLeagueLocked})
  }

  addLeague = () => {
    this.setState({addLeagueTriggered: !this.state.addLeagueTriggered})
  }



  render(){
    return(
      <div>
        <div className="ui two column grid">
          <div className="column four wide">
          <div id="leagueList">
            <Leagues leagues={this.state.leagues} leagueClick={this.onLeagueClick} addLeague={this.addLeague}/>
          </div>
          </div>
          <div className="column twelve wide">
            <LeagueControllerView  selectedLeague={this.state.selectedLeague} selectedLeagueLocked={this.state.selectedLeagueLocked} addLeagueTriggered={this.state.addLeagueTriggered}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage
