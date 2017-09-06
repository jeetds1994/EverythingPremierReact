import React from 'react'
import Goal from './Goal'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'


const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true
    };

const Goals = ({videos}) => {
    let goals = videos.map((video, index) => {
      return(
        <div>
          <ReactPlayer url={video.url} controls/>
        </div>
      )
    })
  return(
      <div>
      <h1>Highlights:</h1>
        <Slider {...settings}>
          {goals}
        </Slider>
      </div>
  )
}

export default Goals
