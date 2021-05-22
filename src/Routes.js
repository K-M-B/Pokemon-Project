import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pokedex from './Pokedex';
import CapturedPokemon from './CapturedPokemon';

function Routes( { captured }) {
    return (
      <Switch>
        <Route path='/captured' render = { () => {
          <CapturedPokemon Captured={captured} />
        }} />
        <Route path='/pokemon' component={Pokedex}  />
        <Route exact path='/' component={Home} />
      </Switch>
    )
}

export default Routes