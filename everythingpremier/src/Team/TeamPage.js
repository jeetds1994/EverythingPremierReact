import React from 'react'

class TeamPage extends React.Component{
  constructor(){
    super()
    this.state = {
      pageID: 0,
      teamData: {}
    }
  }

  componentDidMount(){
    let pageID = parseInt(window.location.href.replace("http://localhost:3001/teams/", ""))
    let url = "http://localhost:3000/teams/" + pageID
    fetch(url).then(resp => resp.json())
    .then(teamData => {
      this.setState({pageID, teamData}
      ,() => console.log(this.state))
    })
  }



  render(){
    return(
      <div>
        hola
      </div>
    )
  }
}

export default TeamPage
