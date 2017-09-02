import React from 'react'
import { Card } from 'semantic-ui-react'

const Fixture = ({fixture}) => {
  return(
    <div>
      <Card>
        <Card.Content
          header={fixture.hometeam + " vs " + fixture.awayteam  }
          meta='Friend'
          description='Elliot is a music producer living in Chicago.'
        />
      </Card>
    </div>
  )
}

export default Fixture;
