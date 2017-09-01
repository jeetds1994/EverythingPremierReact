import React from 'react'

const Standing = ({standing}) => {
  console.log(standing)
  return(
    <tr>
      <td>
        <h4>{standing.position}</h4>
      </td>
      <td className="single line">
        <img src={standing.image_url} alt={`${standing.name} logo`} className="standing_logos"/>
        {standing.name}

      </td>
      <td>
        {standing.playedGames}
      </td>
      <td>
        {standing.points}
      </td>
      <td>
        {standing.goalDifference}
      </td>
    </tr>
  )
}

export default Standing
