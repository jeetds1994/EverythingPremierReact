import React from 'react'

const PlayerInfo = ({player}) => {
  return(
    <div className="ui two column wide">
      <div className="column eight wide">
        <img src={player.image_url} alt={player.name}/>
      </div>
      <div className="column eight wide">
        <p>{player.bio}</p>
      </div>
    </div>
  )
}

export default PlayerInfo
