import React from 'react'

const TeamInfo = ({teamName, bio}) => {
  console.log(bio)
  return(
    <div id="teambio">
      <h1 id="bio" >About {teamName}</h1>
      <h3 id="bio" >{bio}</h3>
    </div>
  )
}

export default TeamInfo
