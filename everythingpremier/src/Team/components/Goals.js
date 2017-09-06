import React from 'react'
import Goal from './Goal'

const Goals = ({videos}) => {
    let goals = videos.map((video, index) => <Goal video={video} key={index}/>)
  return(
    <div>
      {goals}
    </div>
  )
}

export default Goals
