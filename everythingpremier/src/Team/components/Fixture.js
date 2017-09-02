import React from 'react'
import { Card } from 'semantic-ui-react'


const Fixture = ({match}) => {
  return(
    <div>
      <Card>
        <Card.Content
          header='Elliot Baker'
          meta='Friend'
          description='Elliot is a music producer living in Chicago.'
        />
      </Card>
    </div>
  )
}

export default Fixture
