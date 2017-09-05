import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const TeamTile = ({team}) => {
  console.log(team)

  var find = ' ';
  var re = new RegExp(find, 'g');
  let url = "http://localhost:3001/teams/" + team.name.toLowerCase().replace(re, '');

  return(
    <Card>
    <a href={url}><Image id="team_tile_image" src={team.image_url} alt={team.name}/></a>


    <Card.Content>
      <a href={url}><Card.Header>{team.name}</Card.Header></a>
    </Card.Content>
  </Card>
  )
}

export default TeamTile
