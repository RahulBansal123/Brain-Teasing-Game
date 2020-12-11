import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="Game__main_container">
      <h1>Welcome to the Brain Twister game</h1>
      <div className="Game__container">
        <Game />
      </div>
    </div>
  );
}

export default App;
