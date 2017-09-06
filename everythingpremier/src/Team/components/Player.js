import React from 'react'

const Player = ({player}) => {
  var find = ' ';
  var re = new RegExp(find, 'g');
  let url = "https://everythingpremier.herokuapp.com/players/" + player.name.toLowerCase().replace(re, '');

  return (
      <a href={url}><li>{player.name}</li></a>
  )
}

export default Player
