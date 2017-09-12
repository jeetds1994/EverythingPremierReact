import React from 'react'
import League from './League'


const Leagues = ({leagues, leagueClick, addLeague}) => {
  return(
    <div>
    <h1>Leagues</h1>
    <button onClick={addLeague}> Click to Add League </button>
    <ul>
      {leagues.map((league,index) => {
        return <League key={index} league={league} leagueClick={leagueClick}/>})}
    </ul>

    </div>
  )
}

export default Leagues
