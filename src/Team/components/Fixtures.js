import React from 'react'
import {  Image, Reveal  } from 'semantic-ui-react'
import Slider from 'react-slick'


const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };


const Fixtures = ({home_games, away_games, matches}) => {

  console.log(matches)
  // let listOfMatches = matches.map((match, index) => <Fixture key={index} match={match} />)
  let listOfMatches = matches.map((match, index) => {
    return(
      <div id="matchesTile">
      <div className="ui two column grid">
        <div className="column seven wide">
          <img id="fixturehomeimageteam" src={match.hometeamimage}/>
          <h2>{match.hometeam}</h2>
        </div>

        <div className="column two wide" id="matchDetails">
          <p>vs</p>
          <p>{match.date_time}</p>
        </div>

        <div className="column seven wide">
          <img id="fixtureawayimageteam" src={match.awayteamimage}/>
          <h2>{match.awayteam}</h2>
        </div>
      </div>
      </div>
    )
  })


  return(
    <div>
      <h1>Matches:</h1>
      <Slider {...settings}>
        {listOfMatches}
      </Slider>

    </div>
  )
}

export default Fixtures
