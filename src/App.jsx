import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Board from './components/board';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-Head">
        {/* <Counter /> */}
        <Board x={3} y={3} />
      </header>
      <Footer />
    </div>
  );
}

export default App;
