import React from "react";
import gmail from "./img/gmail.png"
import linkedin from "./img/linkedin.png"
import github from "./img/github.png"

export default function Contact() {

    return (
        <div className="center">
            <ul id="contact-list">
                <div className="contact-tile"><a href="mailto:tylermontobbio@gmail.com" target="_blank" rel="noreferrer"><li><img src={gmail} alt="gmail-icon" className="contact-icon" />mail</li></a></div>
                <div className="contact-tile"><a href="https://www.linkedin.com/in/tmontobbio" target="_blank" rel="noreferrer"><li><img src={linkedin} alt="linkedin-icon" className="contact-icon" />linkedin</li></a></div>
                <div className="contact-tile"><a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer"><li><img src={github} alt="github-icon" className="contact-icon" />github</li></a></div>
            </ul>
        </div>
    )
}