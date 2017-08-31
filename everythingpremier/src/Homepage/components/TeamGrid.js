import React from 'react'
import TeamTile from './TeamTile'

const TeamGrid = ({teams}) => {
  return (
    <div>
      {teams.map(team => <TeamTile team={team}/>)}
    </div>
  )
}

export default TeamGrid
