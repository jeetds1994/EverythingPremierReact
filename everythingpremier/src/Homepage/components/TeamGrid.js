import React from 'react'
import TeamTile from './TeamTile'

const TeamGrid = ({teams}) => {
  return (
    <div id="team_grid">
    <div className="ui grid">
      {teams.map((team, index) => <TeamTile key={index} team={team}/>)}
    </div>
    </div>
  )
}

export default TeamGrid
