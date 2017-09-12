import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class NewLeague extends React.Component {
  constructor(){
    super()
    this.state = {
      leagueName: "",
      squadName: "",
      profilePicURL: ""
    }
  }

  updateLeagueName = (event) => {
    let leagueName = event.target.value
    this.setState({leagueName})
  }
  updateSquadName = (event) => {
    let squadName = event.target.value
    this.setState({squadName})
  }

  updateprofilePicURL = (event) => {
    let profilePicURL = event.target.value
    this.setState({profilePicURL})
  }

  createLeague = () => {
    let data = new FormData()
    data.append("league_name", this.state.leagueName)
    data.append("squad_name", this.state.squadName)
    data.append("image_url", this.state.profilePicURL)
    fetch('http://localhost:3000/api/v1/leagues/new', {
      method: 'POST',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: data
    }).then(resp => resp.json())
    .then(players => {
      this.props.setLeagePlayers(players)
    })
  }

  render(){
    return(
      <div>
      <Form onSubmit={this.createLeague}>
          <Form.Field>
            <label>League Name:</label>
            <input placeholder='League' onChange={this.updateLeagueName}/>
          </Form.Field>
          <Form.Field>
            <label>Squad Name:</label>
            <input placeholder='Squad' onChange={this.updateSquadName}/>
          </Form.Field>
          <Form.Field>
            <label>Squad Profile Pic</label>
            <input placeholder='Profile Pic URL' onChange={this.updateprofilePicURL}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewLeague
