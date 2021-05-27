import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pokedex from './Pokedex';
import CapturedPokemon from './CapturedPokemon';

function Routes( { }) {
  const [capturedPokemon, setCapturedPokemon] = useState([]);

  const handleCapture = (poke) => {
        const tempCaptured = [...capturedPokemon];
        tempCaptured.push(poke);
        setCapturedPokemon(tempCaptured);
    }

    const handleRelease = (poke) => {
        const tempCaptured = [...capturedPokemon];
        tempCaptured.splice(tempCaptured.findIndex(cp => cp.id === poke.id), 1);å
        setCapturedPokemon(tempCaptured);
    }
    return (
      <Switch>
        <Route path='/captured' component={CapturedPokemon} capturedPokemon={capturedPokemon} />
        <Route path='/pokemon' component={Pokedex} capturedPokemon={capturedPokemon} handleCapture={handleCapture} handleRelease={handleRelease}  />
        <Route exact path='/' component={Home} />
        <Route render= {() => <h1>404 - Page Not Found</h1>} />
      </Switch>
    )
}

export default Routes