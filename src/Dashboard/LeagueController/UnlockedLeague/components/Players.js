import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const playerGen = (k, t, v) => {
  return {key: k, text: t, value: v, id: v}
}

const Players = ({players, updateMyPlayers, addToSelected}) => {
  let options = players.map((player, index) => {
    return playerGen(player.id, player.name, player.id)
  })

  return(
    <div>
      <h1>Players:</h1>
      <Dropdown placeholder='Players' fluid multiple search selection options={options} onChange={addToSelected}/>

    </div>
  )
}

export default Players
