import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const TeamTile = ({team}) => {
  console.log(team)
  return(
    <Card>
    <Image id="team_tile_image" src={team.image_url} alt={team.name}/>
    <Card.Content>
      <Card.Header>{team.name}</Card.Header>
    </Card.Content>
  </Card>
  )
}

export default TeamTile
