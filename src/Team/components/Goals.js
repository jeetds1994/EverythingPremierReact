import React from 'react'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'


const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3
    };

const Goals = ({videos}) => {
    let goals = videos.map((video, index) => {
      console.log("MAPPING VID")
      return(
        <div>
          <ReactPlayer key={index} data-index={index} url={video.url} controls width={400} height={400}/>
        </div>
      )
    })
  return(
      <div>
      <h1>Highlights:</h1>
        {goals.length && <Slider {...settings}>
          {goals}
        </Slider>}
      </div>
  )
}

export default Goals
