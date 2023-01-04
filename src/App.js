import './App.css';
import dogIM from './img/dogim.jpg'
import movieHunter from './img/movie-hunter.png'

function App() {
  return (
  <div className="App">
    <div id='main-container'>
      <div className='project-tile'>
        <a href="https://moviehunter.tmontobbio.dev/">
          <img src={movieHunter} alt="movie-hunter" />
        </a>
      </div>
      <div className='project-tile'>
        <a href="https://dogim.tmontobbio.dev/">
          <img src={dogIM} alt="dog-im" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default App;
