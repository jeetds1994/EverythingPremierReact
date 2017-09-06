import React from 'react'
import Goal from './Goal'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'


const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };


const Goals = ({videos}) => {
    let goals = videos.map((video, index) => {
      return(
        <div id="matchesTile">
          <ReactPlayer url={video.url} controls/>
        </div>
      )
    })
  return(
    <div id="highlights">
      <h1>Highlights:</h1>
      <Slider {...settings}>
        {goals}
      </Slider>
    </div>
  )
}

export default Goals
