import './App.css';
import { CardLayout } from './components/gameBoard/CardLayout';

function App() {
  return (
    <div className="App">
      <h1>Climbing Knot Memory Game</h1>
      <h4>Choose your knot - just make sure you don't choose the same one twice!</h4>

      <CardLayout />
    </div>
  );
}

export default App;
