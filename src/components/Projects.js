import React from "react";
import dogIM from './img/dogim.jpg'
import movieHunter from './img/movie-hunter.png'
import julianc from "./img/julianc-logo.png"
import { useState } from "react";

export default function Projects() {
	var char = document.getElementById("character")
	var block = document.getElementById("block")
	const [isJumping, setIsJumping] = useState(false)
	const [gameStart, setGameStart] = useState(false)



	// setInterval(function () {
	// 	debugger;
	// 	let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"))
	// 	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

	// 	if (gameStart === true && blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
	// 		debugger
	// 		setGameStart(false)
	// 		console.log("u lose!")
	// 	}
	// }, 10)


	function jump() {
		isJumping ? console.log("already jumping") : setIsJumping(true)
		setTimeout(() => {
			setIsJumping(false)
		}, 500)
	}

	return (
		<div id="projects" className="center">
			<a href="https://julianc.tmontobbio.dev/" target="_blank" rel="noreferrer">
				<img src={julianc} alt="movie-hunter" className="grid-item-1" />
			</a>
			<span>
				<a href="https://julianc.tmontobbio.dev/" target="_blank" rel="noreferrer">
					<h2>
						Julian Cristman Art
					</h2>
				</a>
				<p className="text">
					Art portfolio site I built for an old friend to help him display his work and get his name out there.  Future updates will include an online store so he may sell his designs on shirts and other merch.
				</p>
			</span>
			<a href="https://moviehunter.tmontobbio.dev/" target="_blank" rel="noreferrer">
				<img src={movieHunter} alt="movie-hunter" className="grid-item-1" />
			</a>
			<span>
				<a href="https://moviehunter.tmontobbio.dev/" target="_blank" rel="noreferrer">
					<h2>
						Movie Hunter
					</h2>
				</a>
				<p className="text">
					A web app build on React.js & Rails frameworks.  This site demonstrates RESTful API queries, user authentication and cookies, sensitive data encryption, ralational API models.  This full-stack application utilizes custom routing, and validators.  The back-end logic written in Ruby allows users to create/read/update/destroy models.  The IMDB ID's are used as params and allow users to also link directly to the IMDB page associated with their movie.
				</p>
			</span>
			<a href="https://dogim.tmontobbio.dev/" target="_blank" rel="noreferrer">
				<img src={dogIM} alt="dog-im" className="grid-item-2" />
			</a>
			<span>
				<a href="https://dogim.tmontobbio.dev/" target="_blank" rel="noreferrer">
					<h2>
						Dog IM
					</h2>
				</a>
				<p className="text">
					A web app build on React.js & Rails frameworks.  Dog IM was a project that enabled me to demonstrate my ability to create a my own API and PostgreSQL database.  As a huge dog lover, I decided to take the average chat app and put a little dog-based twist on it - "Dog IM - an instant messenger for pups!".  Future updates will include web-sockets for real-time messanging, currently this site acts as a forum, where users must refresh the page for new messages.
				</p>
			</span>
			<div id="game-container">
				<div id="game">
					<div id="character" className={isJumping ? "animate-jump" : ""}>

					</div>
					<div id={gameStart ? "block" : ""}>

					</div>
				</div>
				<div id="button-container">
					<button id="start-btn" onClick={() => setGameStart(!gameStart)}>Start</button>
					<button id="jump-btn" onClick={jump}>Jump!</button>
				</div>
			</div>
		</div>
	)
}