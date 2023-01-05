import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
  <div className="App">
      <div id="content">
        <div id="header">
          <h1>Tyler Montobbio</h1>
        </div>
        <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <Routes>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </div>
  </div>
  )
}


{/* <div className='project-tile'>
        <a href="https://moviehunter.tmontobbio.dev/">
          <img src={movieHunter} alt="movie-hunter" className='project-img'/>
        </a>
      </div>
      <div className='project-tile'>
        <a href="https://dogim.tmontobbio.dev/">
          <img src={dogIM} alt="dog-im" className='project-img' />
        </a>
      </div> */}