import React from 'react'
import LoginForm from './components/LoginForm'

class FantasyLoginPage extends React.Component{
  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      userData: []
    }
  }

  componentDidMount(){
    if(!!localStorage.getItem("jwt")){
      window.location = "https://everythingpremier.herokuapp.com/dashboard"
    }
  }


  login = (event) => {
    let data = new FormData()
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    fetch('https://everythingpremierapi.herokuapp.com/api/v1/login/',{
      method: 'POST',
      body: data
    }).then(resp => resp.json())
    .then(data => {
      localStorage.setItem('jwt', data.jwt );
      console.log(data.jwt);
      if(!!data.jwt){
        window.location = "http://localhost:3001/dashboard"
      }
    })

  }

  updateUsername = (event) => {
    let username = event.target.value
    this.setState({username})
  }

  updatePassword = (event) => {
    let password = event.target.value
    this.setState({password})
  }

  updateConfirmPassword = (event) => {
    let confirmPassword = event.target.value
    this.setState({confirmPassword})
  }

  signup = () => {
    if(this.state.password == this.state.confirmPassword){
      let data = new FormData()
      data.append("username", this.state.username)
      data.append("password", this.state.password)
      fetch('https://everythingpremierapi.herokuapp.com/api/v1/signup', {
        method: 'POST',
        body: data
      }).then(resp => resp.json())
      .then(data => {
        if(!!data.id){
          this.login()
        }
      })
    }
  }

  render(){
    return(
      <div>
        <LoginForm login={this.login} updateUsername={this.updateUsername} updatePassword={this.updatePassword} updateConfirmPassword={this.updateConfirmPassword} signup={this.signup}/>
      </div>
    )
  }
}

export default FantasyLoginPage
