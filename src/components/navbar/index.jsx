import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import Game from '../game';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand">
            <h1>
            <FontAwesomeIcon icon={faBolt}  /> Tic-Tac-Toe
            </h1>
            <Game/>
        </nav>
    )
};

export default Navbar;