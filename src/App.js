import './App.css';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [cursorVariant, setCursorVariant] = useState('default')

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

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12
    }
  }

  return (
    <div className="App">
      <div id="content">
        <div id="header">
          <h1>Tyler Montobbio</h1>
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </div >
  )
}