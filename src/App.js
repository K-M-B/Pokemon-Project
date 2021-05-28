import React, {useContext} from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Store, { PokemonContext } from './PokemonContext';
import './App.css';
import Routes from './Routes'
import NavMenu from './NavMenu';


function App() {
  return (
    <Store>
      <Router>
        <div>
          <NavMenu />
          <Routes />
        </div>
      </Router>
    </Store>
  );
}

export default App;
