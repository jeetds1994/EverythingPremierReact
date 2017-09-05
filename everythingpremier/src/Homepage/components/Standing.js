import React from 'react'

const Standing = ({standing}) => {
  console.log(standing)
  var find = ' ';
  var re = new RegExp(find, 'g');
  let url = "http://localhost:3001/teams/" + standing.name.toLowerCase().replace(re, '');


  return(
    <tr>
      <td>
        <h4>{standing.position}</h4>
      </td>
      <td className="single line">
        <a href={url}><img src={standing.image_url} alt={`${standing.name} logo`} className="standing_logos"/></a>
        <a href={url}>{standing.name}</a>

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
