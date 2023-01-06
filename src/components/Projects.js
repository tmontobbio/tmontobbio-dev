import React from "react";
import dogIM from './img/dogim.jpg'
import movieHunter from './img/movie-hunter.png'

export default function Projects() {
  return (
    <div id="projects" className="child">
      <img src={movieHunter} alt="movie-hunter" className="grid-item-1" />
      <span>
        <h2>
          Movie Hunter
        </h2>
        <p>
          A web app build on React.js & Rails frameworks.  This site demonstrates RESTful API queries, user authentication and cookies, sensitive data encryption, and redundant API models.  This full-stack application utilizes custom routing, and validators.  The back-end logic written in Ruby allows users to create/read/update/destroy models.  The IMDB ID's are used as params and allow users to also link directly to the IMDB page associated with their movie.
        </p>
      </span>
      <img src={dogIM} alt="dog-im" className="grid-item-2" />
      <span>
        <h2>
          Dog IM
        </h2>
        <p>
          A web app build on React.js & Rails frameworks.  Dog IM was a project that enabled me to demonstrate my ability to create a my own API and PostgreSQL database.  As a huge dog lover, I decided to take the average chat app and put a little dog-based twist on it - "Dog IM - an instant messenger for pups!".  Future updates will include web-sockets for real-time messanging, currently this site acts as a forum, where users must refresh the page for new messages.
        </p>
      </span>
    </div>
  )
}


{/* <a href="https://moviehunter.tmontobbio.dev/"></a>
<a href="https://dogim.tmontobbio.dev/"></a> */}