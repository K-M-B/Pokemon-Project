
import { Link } from 'react-router-dom';

function NavMenu() {
    return (
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            </ul>
        </nav>
    )
}

export default NavMenu;