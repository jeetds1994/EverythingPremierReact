import React from 'react'

const PlayerInfo = ({player}) => {
  return(
    <div>
      <img src={player.image_url} alt={player.name}/>
    </div>
  )
}

export default PlayerInfo
