import React from 'react'
import Slider from 'react-slick'
import {  Image, Reveal  } from 'semantic-ui-react'
import Match from './Match'

const Matches = ({home_games, away_games, matches}) => {

  console.log(matches)
  let listOfMatches = matches.map((match, index) => <Match key={index} match={match} />)
  return(
    <div>
      {listOfMatches}
    </div>
  )
}

export default Matches
