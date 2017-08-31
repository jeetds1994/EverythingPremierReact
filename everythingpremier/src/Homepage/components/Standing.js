import React from 'react'

const Standing = ({standing}) => {
  console.log(standing)
  return(
    <div className="item">
      <div className="image">
        <img src={standing.image_url} alt={`${standing.name} logo`}/>
      </div>
      <div className="content">
        <div className="header">{standing.name}<div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Standing
