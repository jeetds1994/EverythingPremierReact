import React from 'react'
import Player from './Player'

const Players = ({players}) => {
  return(
    <div>
      <h1>Players:</h1>
      <ul>
      {players.map((player, index) => <Player key={index} player={player}/>)}
      </ul>
    </div>
  )
}

export default Players
