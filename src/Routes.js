import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pokedex from './Pokedex';
import CapturedPokemon from './CapturedPokemon';

function Routes( { }) {
    return (
      <Switch>
        <Route path='/captured' component={CapturedPokemon} />
        <Route path='/pokemon' component={Pokedex} />
        <Route exact path='/' component={Home} />
        <Route render= {() => <h1>404 - Page Not Found</h1>} />
      </Switch>
    )
}

export default Routes