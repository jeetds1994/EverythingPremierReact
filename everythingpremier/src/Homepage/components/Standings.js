import React from 'react'
import Standing from './Standing'

const Standings = ({standings}) => {
  return(
    <div className="ui divided items">
      {standings.map(standing => <Standing standing={standing}/>)};
    </div>
  )
}

export default Standings
