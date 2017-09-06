import React from 'react'

import ReactPlayer from 'react-player'

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


const Goal = ({video}) => {
  return(
    <div>
      <ReactPlayer url={video.url} controls/>
    </div>
  )
}

export default Goal
