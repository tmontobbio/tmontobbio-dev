import React from "react";
import dogIM from './img/dogim.jpg'
import movieHunter from './img/movie-hunter.png'

export default function Projects() {
  return (
    <div className="child">
      <div className='project-tile'>
        <a href="https://moviehunter.tmontobbio.dev/">
          <img src={movieHunter} alt="movie-hunter" className='project-img' />
        </a>
      </div>
      <div className='project-tile'>
        <a href="https://dogim.tmontobbio.dev/">
          <img src={dogIM} alt="dog-im" className='project-img' />
        </a>
      </div>
    </div>
  )
}