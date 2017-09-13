import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

const playerGen = (k, t, v) => {
  return {key: k, text: t, value: v, id: v}
}

const Players = ({players, addToSelected, updateLeague}) => {
  let options = players.map((player, index) => {
    return playerGen(player.id, player.name, player.id)
  })

  let message = "<<<< Add Players"
  return(
    <div>
      <h1>Players:</h1>
      <Dropdown placeholder='Players' fluid multiple search selection options={options} onChange={addToSelected}/>
      <Button onClick={updateLeague} >{message}</Button>
    </div>
  )
}

export default Players
