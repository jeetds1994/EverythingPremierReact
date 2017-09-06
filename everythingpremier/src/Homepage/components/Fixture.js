import React from 'react'
import { Card } from 'semantic-ui-react'

const Fixture = ({fixture}) => {

  return(
    <div>
      <Card>
      <img id="fixturehomeimage" src={fixture.hometeamimage}/>
      <p>vs</p> 
      <img id="fixtureawayimage" src={fixture.awayteamimage}/>
        <Card.Content
          meta={fixture.date_time}
          description='Elliot is a music producer living in Chicago.'
        />
      </Card>
    </div>
  )
}

export default Fixture;
