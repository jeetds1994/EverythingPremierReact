import React from 'react'
import Standing from './Standing'

const Standings = ({standings}) => {
  return(
      <table className="ui celled padded table">
      <thead>
        <tr>
          <th>Position</th>
          <th>Club</th>
          <th>Played</th>
          <th>Points</th>
          <th>Goal Difference</th>
        </tr>
      </thead>
        {standings.map((standing, index) => <Standing key={index} standing={standing}/>)};
      </table>
  )
}

export default Standings
