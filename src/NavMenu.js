
import { NavLink } from 'react-router-dom';

function NavMenu() {
    return (
        <nav role="navigation">
            <ul>
            <li><NavLink to="/" activeStyle={{ color:'green'}}>Home</ NavLink></li>
            <li><NavLink to="/pokemon" activeStyle={{ color:'green'}}>Pokemon</ NavLink></li>
            <li><NavLink to="/captured" activeStyle={{ color: 'green' }}>Captured Pokemon</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavMenu;