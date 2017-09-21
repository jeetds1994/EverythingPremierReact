import React from 'react'
import Leagues from './components/Leagues'
import LeagueControllerView from './LeagueController/LeagueControllerView'

import { Form, Input } from 'semantic-ui-react'

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

    this.onLeagueClick = this.onLeagueClick.bind(this)
  }

  //sets jwt token in localStorage
  componentDidMount(){
    let jwt = localStorage.getItem("jwt")
    console.log(jwt)
    if(jwt){
      this.getInfo(jwt)
    }
  }

  //get leagues data and user data.
  getInfo = (jwt) =>{
    fetch(`https://everythingpremierapi.herokuapp.com/api/v1/leagues`,{
      method: "GET",
      headers: {Authorization: `Bearer ${jwt}`}
    }).then(resp => resp.json())
    .then(data => {
      this.setState({
        leagues: data.leagues,
        userData: data.user
      })
    })
}
  //on league click handler
  onLeagueClick = (event) => {
    let val = event.target.value
    let selectedLeague = this.state.leagues.find(league => league.id === val)
    let selectedLeagueLocked = eval(event.target.dataset.locked)
    this.setState({selectedLeague, selectedLeagueLocked})
  }

  addLeague = () => {
    this.setState({addLeagueTriggered: !this.state.addLeagueTriggered})
  }

  //sends request to join a league
  joinLeague = (event) => {
    let val = event.currentTarget.elements[0].value
    let data = new FormData()
    data.append("league_name", val)
    fetch('https://everythingpremierapi.herokuapp.com/api/v1/leagues/addUser',{
      method: "POST",
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: data
    })
  }

  render(){
    return(
      <div>
        <div className="ui two column grid">
          <div className="column four wide">
          <div id="leagueList">
          <Form onSubmit={this.joinLeague}>
           <Form.Field inline>
             <label>Join League:</label>
             <Input placeholder='League Name' />
           </Form.Field>
         </Form>

            <Leagues leagues={this.state.leagues} leagueClick={this.onLeagueClick} addLeague={this.addLeague}/>
          </div>
          </div>
          <div className="column twelve wide">
            <LeagueControllerView  selectedLeague={this.state.selectedLeague} selectedLeagueLocked={this.state.selectedLeagueLocked} addLeagueTriggered={this.state.addLeagueTriggered} userData={this.state.userData}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardPage
