import React from "react";
import me1 from "./img/me1.jpg"
import me2 from "./img/me2.jpg"
import me3 from "./img/me3.jpg"
import me4 from "./img/me4.jpg"

export default function About() {
    return (
        <div id="about" className="child" >
            <img src={me1} className="grid-item-1" /><span><p>Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words</p></span>
            <img src={me2} className="grid-item-2" /><span><p>Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words</p></span>
            <img src={me3} className="grid-item-3" /><span><p>Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words</p></span>
            <img src={me4} className="grid-item-4" /><span><p>Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words</p></span>
        </div >
    )
}