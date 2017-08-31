import React from 'react'
import Fixture from './Fixture'

class Fixtures extends React.Component{
  constructor(){
    super()
    this.state = {
      fixtures: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/fixtures')
    .then(resp => resp.json())
    .then(fixtures => this.setState({ fixtures}
    ,() => console.log(this.state.fixtures)))
  }


  render(){
    return (
      <div className="ui horiztonal menu" id="fixture_list">
        {this.state.fixtures.map((fixture, index) => <Fixture key={index} fixture={fixture}/>)}
      </div>
    )
  }
}

export default Fixtures
