import React from 'react'

import ReactPlayer from 'react-player'

const Goal = ({video}) => {
  return(
    <div>
      <ReactPlayer url={video.url} controls/>
    </div>
  )
}

export default Goal
