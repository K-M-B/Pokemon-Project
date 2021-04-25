import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PokemonList from './PokemonList';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route exact path='/pokemon' component={PokemonList} /> */}
                {/* <Route path='/pokemon/:number' component={PokemonDetail} /> */}
            </Switch>
        </main>
    )
}

export default Main