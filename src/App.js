import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Routes from './Routes'
import NavMenu from './NavMenu';

function App() {
  return (
    <Router>
    <div>
    <NavMenu />
    <Routes />
    </div>
    </Router>
  );
}

export default App;
