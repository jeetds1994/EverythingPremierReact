import React from 'react'
import { Image, List } from 'semantic-ui-react'


const MyPlayer = ({player}) =>{
  if(player.image_url === null){
    player.image_url = "http://fynanc.com/wp-content/uploads/2016/08/batman-for-facebook.jpg"
  }
  return(
    <List.Item>
      <Image avatar src={player.image_url} />
      <List.Content>
        <List.Header>{player.name}</List.Header>
      </List.Content>
    </List.Item>
  )
}

export default MyPlayer
