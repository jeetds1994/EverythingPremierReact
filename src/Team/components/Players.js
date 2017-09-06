import React from 'react'
import Player from './Player'

const Players = ({players}) => {

  return (
    <div>
    <h1>Players</h1>
      <ul>
      {players.map((player, index) => {
         return <Player player={player} key={index}/>
       })}
      </ul>
    </div>
  )
}

export default Players
