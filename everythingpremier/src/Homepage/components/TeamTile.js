import React from 'react'

const TeamTile = ({team}) => {
  console.log(team)
  return(
    <div className="ui card">
      <div className="ui image">
        <img src={team.image_url} alt={team.name} align="middle"/>
      </div>
      <div className="content">
      <a class="header">{team.name}</a>
      </div>
    </div>
  )
}

export default TeamTile
