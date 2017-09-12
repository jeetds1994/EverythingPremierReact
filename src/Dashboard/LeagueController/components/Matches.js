import React from 'react'
import Match from './Match'

const Matches = ({matches}) => {
  console.log(matches);
  return(
    <div>
      <h1>Matches:</h1>
      {matches.map((match, index) => {
        return <Match key={index} match={match}/>
      })}
    </div>
  )
}
export default Matches
