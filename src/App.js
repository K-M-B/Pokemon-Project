import './App.css';
import PokemonList from './PokemonList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
