import React from 'react'
import { Grid, Image } from 'semantic-ui-react'



const Player = ({player}) => {
  var find = ' ';
  var re = new RegExp(find, 'g');
  let url = "https://everythingpremier.herokuapp.com/players/" + player.name.toLowerCase().replace(re, '');

  return (
    <Grid.Column>

        <Image
          src={player.image_url}
          as='a'
          size='medium'
          href='http://google.com'
          target='_blank'
        />
    </Grid.Column>
  )
}

export default Player
