import React from "react";
import dogIM from './img/dogim.jpg'
import movieHunter from './img/movie-hunter.png'

export default function Projects() {
  return (
    <div id="projects" className="child">
      <img src={movieHunter} alt="movie-hunter" className="grid-item-1" />
      <span>
        <p>
          About Movie Hunter...
        </p>
      </span>
      <img src={dogIM} alt="dog-im" className="grid-item-2" />
      <span>
        <p>
          About DOG IM...
        </p>
      </span>
    </div>
  )
}


{/* <a href="https://moviehunter.tmontobbio.dev/"></a>
<a href="https://dogim.tmontobbio.dev/"></a> */}