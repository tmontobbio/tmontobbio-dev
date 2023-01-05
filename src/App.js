import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {
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
    </div>
  )
}