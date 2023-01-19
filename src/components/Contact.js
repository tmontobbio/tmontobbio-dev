import React from "react";
import gmail from "./img/gmail.png"
import linkedin from "./img/linkedin.png"
import github from "./img/github.png"

export default function Contact() {

    return (
        <div className="center">
            <div className="contact-tile"><a href="mailto:tylermontobbio@gmail.com" target="_blank" rel="noreferrer"><img src={gmail} alt="gmail-icon" className="contact-icon" /></a></div>
            <div className="contact-tile"><a href="https://www.linkedin.com/in/tmontobbio" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin-icon" className="contact-icon" /></a></div>
            <div className="contact-tile"><a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer"><img src={github} alt="github-icon" className="contact-icon" /></a></div >
        </div>
    )
}   