import React from 'react'
import Slider from 'react-slick'
import {  Image, Reveal  } from 'semantic-ui-react'

const Matches = ({home_games, away_games}) => {
  var matches = []
  matches = matches.concat(home_games, away_games)

  debugger
  return(
    <div>
      <Slider>
        {matches.map(match => {<Match match={match}/>})}
      </Slider>
    </div>
  )
}

export default Matches
