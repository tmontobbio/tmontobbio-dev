import React from "react";
import me1 from "./img/me1.jpg"
import me2 from "./img/me2.jpg"
import me3 from "./img/me3.jpg"
import me4 from "./img/me4.jpg"

export default function About() {
    return (
        <div id="about" className="center" >
            <img src={me1} className="grid-item-1" alt="tyler" /><span><p>Originally an Automotive Technician, my various interests have brought me to wild places during my 15 years of professional work experience.  I've created products, served food, and climbed tall buildings all to complete a hard days work.  Early in my career I attended many community college courses to become proficient using machinist tooling and every welding process.  However, the daily strain on my body would send me in a different direction.</p></span>
            <img src={me2} className="grid-item-2" alt="tyler" /><span><p>Adventurous and curious, I've spent my life learning about anything and every thing that interests me.  My passion for the sciences makes me open to learning in an evironment that is gradually changing over time.  As a person of many hobbies, there is no shortage of content to view and concepts to learn.  All of these traits are what led me to pursure software engineering.</p></span>
            <img src={me3} className="grid-item-3" alt="van" /><span><p>Naturally born a problem solver, there are few projects in life I wouldn't attempt.  I built my own camper van that I lived in and traveled for the better part of two years. I've framed, wired, roofed, and finished a shelter that I lived in for a year.  Tools have always been my language, and in code there's no shortage of tools.  I love to fix, build, create and learn.</p></span>
            <img src={me4} className="grid-item-4" alt="bug" /><span><p>This page wouldn't be complete without a section about Bug.  I could dedicate an entire website to her, which I just might do!  This dog has gotten me through the hardest of times, and I endlessly value the companionship provided by our furry friends.  Get outside, fix some stuff, take a hike!</p></span>
        </div >
    )
}