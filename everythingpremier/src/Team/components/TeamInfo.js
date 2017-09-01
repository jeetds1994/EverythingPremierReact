import React from 'react'

const TeamInfo = ({teamName, bio}) => {
  return(
    <div>
      <h1>About {teamName}</h1>
      <p>{bio}</p>
    </div>
  )
}

export default TeamInfo
