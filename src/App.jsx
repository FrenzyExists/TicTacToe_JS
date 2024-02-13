// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import GameInspector from './components/gameMaster';
import { useState } from 'react';
import Counter from './components/counter';

function App() {
  const gameMode = ['Easy', 'Normal', '2-Player', 'Evil',]
  const [currentGameModeIndex, setCurrentGameModeIndex] = useState(0);
  const [gridSize, setGridSize] = useState([3,3]);

  function easy (board, x, y, bot_symbol, player_symbol) {
    let end = true;
    let pos;
    while (!end) {
      pos = Math.floor(Math.random()*x*y)
      if (board[pos] !== player_symbol) {
        board[pos] = bot_symbol
        end = !end
      }
    }
    return
  }


  return (
    <div className="App">
      <Navbar gameMode={gameMode} currentGameModeIndex={currentGameModeIndex} setIndexFunction={setCurrentGameModeIndex}/>
      <Counter playerTurn={1} winner={false} />
      <header className="App-Head">
      <GameInspector x={gridSize[0]} y={gridSize[1]} />
      </header>
      <Footer />
    </div>
  );
}

export default App;
