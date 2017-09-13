import React from 'react'

const League = ({league, leagueClick}) => {
  console.log(league)
  return (
    <li value={league.id} data-locked={league.locked} onClick={leagueClick}>{league.name}</li>
  )
}

export default League
