import React from 'react'
import Fixture from './Fixture'
import { Card } from 'semantic-ui-react'


const Fixtures = ({teamData, fixtures}) => {
    return (
      <div className="ui horiztonal menu" id="fixture_list">
        <Card.Group>
        {fixtures.map((fixture, index) => <Fixture key={index} fixture={fixture}/>)}
        </Card.Group>
      </div>
    )
}

export default Fixtures
