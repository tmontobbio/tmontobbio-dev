import './App.css';
import invader from "./components/img/invader.gif"
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  // eslint-disable-next-line
  const [cursorVariant, setCursorVariant] = useState('default')
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10
    }
  }

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <div className="App">
      <div id="content">
        <div id="header">
          <h1 id="name">Tyler Montobbio</h1>
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      >
        <img src={invader} alt="space-invader-gif" id="invader" />
      </motion.div>
    </div >
  )
}