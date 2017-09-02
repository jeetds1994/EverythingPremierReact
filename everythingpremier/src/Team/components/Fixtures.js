import React from 'react'
import Fixture from './Fixture'
import { Card } from 'semantic-ui-react'


const Fixtures = ({home_games, away_games, matches}) => {

  console.log(matches)
  let listOfMatches = matches.map((match, index) => <Fixture key={index} match={match} />)
  return(
    <div className="ui horiztonal menu" id="fixture_list">
    <Card.Group>
      {listOfMatches}
      </Card.Group>

    </div>
  )
}

export default Fixtures
