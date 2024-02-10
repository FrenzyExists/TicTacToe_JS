// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import GameInspector from './components/gameMaster';
import { useState } from 'react';
import Counter from './components/counter';

function App() {
  const gameMode = ['Normal', '2-Player', 'Evil',]
  const [currentGameModeIndex, setCurrentGameModeIndex] = useState(0);



  return (
    <div className="App">
      <Navbar gameMode={gameMode} currentGameModeIndex={currentGameModeIndex} setIndexFunction={setCurrentGameModeIndex}/>
      <Counter playerTurn={1} winner={false} />
      <header className="App-Head">
        <GameInspector x={3} y={3} />
      </header>
      <Footer />
    </div>
  );
}

export default App;
