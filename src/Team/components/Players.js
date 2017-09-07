import React from 'react'
import Player from './Player'
import { Grid, Image } from 'semantic-ui-react'

const Players = ({players}) => {

  let displayPlayers = players.map((player, index) => {
   return <Player player={player} key={index}/>
 })
 let size = parseInt(displayPlayers.length / 5) + 1

 let x = Array(size).fill().map(()=>Array(5).fill())
 let counter = -1

 let display = x.map(row =>{
   return(
     <Grid.Row>
        {row.map(item => {
          counter = counter + 1
          return displayPlayers[counter]
        })}
     </Grid.Row>
   )
 })

  return (
    <div >
    <h1>Players:</h1>
      <Grid columns={5} divided>
        {display}
      </Grid>
   </div>
  )
}

export default Players
