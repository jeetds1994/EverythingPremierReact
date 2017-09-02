import React from 'react'

const Stats = ({stats}) => {
  console.log(stats)
  let objKeys = Object.keys(stats)
  let objValues = Object.values(stats)
  let display = objKeys.map((key, index) => {
    return <li>{key}: {objValues[index]}</li>
  })
  return (
    <div>
      <h2>Player Stats:</h2>

      <ul>
        {display}
      </ul>
    </div>
  )
}

export default Stats
