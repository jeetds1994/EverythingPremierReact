import React from 'react'
import {  Image, Reveal  } from 'semantic-ui-react'
import Slider from 'react-slick'


const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };


const Fixtures = ({home_games, away_games, matches}) => {

  console.log(matches)
  // let listOfMatches = matches.map((match, index) => <Fixture key={index} match={match} />)
  let listOfMatches = matches.map((match, index) => {
    return(
      <div id="matchesTile">
          <img id="fixturehomeimage" src={match.hometeamimage}/> vs <img id="fixtureawayimage" src={match.awayteamimage}/>
        <h1>{match.id}</h1>
      </div>
    )
  })

  return(
    <div>
      <Slider {...settings}>
        {listOfMatches}
      </Slider>

    </div>
  )
}

export default Fixtures
