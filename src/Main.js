import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Pokedex from './Pokedex';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pokemon' component={Pokedex} />
                {/* <Route path='/pokemon/:number' component={PokemonDetail} /> */}
            </Switch>
        </main>
    )
}

export default Main