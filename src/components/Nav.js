import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {

  const linkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      fontSize: isActive ? '30px' : '20px',
      // textDecoration: isActive ? 'underline' : 'none',
    }
  }

  return (
    <div id="nav">
      <ul id="nav-list">
        <NavLink to="/" style={linkStyle}>
          <li className="nav-sel">
            Home
          </li>
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          <li className="nav-sel">
            About
          </li>
        </NavLink>
        <NavLink to="/projects" style={linkStyle}>
          <li className="nav-sel">
            Projects
          </li >
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          <li className="nav-sel">
            Contact
          </li>
        </NavLink>
      </ul>
    </div>
  )
}