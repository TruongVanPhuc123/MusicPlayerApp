import './css/App.css';
import React from 'react'
import Typography from './components/Typography';
import MainMusic from './components/MainMusic';
import { MusicPlayerProvider } from './hook/MusicPlayerContext';


function App() {
  return (
    <MusicPlayerProvider>
      <div className="App">
        <div className="container">
          <div className="music-container">
            <MainMusic />
          </div>
          <div className="title">
            <Typography />
          </div>
        </div>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
