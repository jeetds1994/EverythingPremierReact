import React from 'react'
import { Image, List } from 'semantic-ui-react'
import MyPlayer from './MyPlayer'


const MyPlayers = ({players}) => {
  return (
    <List celled>
      {players.map((player, index) => <MyPlayer key={index} player={player}/>)}
    </List>
  )
}
export default MyPlayers
