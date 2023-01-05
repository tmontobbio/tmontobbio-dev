import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {

  const linkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      fontSize: isActive ? '40px' : '20px',
      // textDecoration: isActive ? 'underline' : 'none',
    }
  }

  return (
    <div id="nav">
      <ul>
        <NavLink to="/" style={linkStyle}>
          <li>
            Home
          </li>
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          <li>
            About
          </li>
        </NavLink>
        <NavLink to="/projects" style={linkStyle}>
          <li>
            Projects
          </li>
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          <li>
            Contact
          </li>
        </NavLink>
      </ul>
    </div>
  )
}