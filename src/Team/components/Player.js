import React from 'react'
import { Grid, Image } from 'semantic-ui-react'



const Player = ({player}) => {
  var find = ' ';
  var re = new RegExp(find, 'g');
  let url = "https://everythingpremier.herokuapp.com/players/" + player.name.toLowerCase().replace(re, '');

  return (
    <Grid.Column>
    <div id="cardContainer">
      <div id="playerCard">
        <Image id="playerCardimg"
          src={player.image_url}
          as='a'
          size='medium'
          href={url}
          target='_blank'
        />
        <h2>{player.name}</h2>
      </div>
      </div>
    </Grid.Column>
  )
}

export default Player
