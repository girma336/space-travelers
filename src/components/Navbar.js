import { Link } from 'react-router-dom';
import logo from '../logo/planet.png';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link style={{ textDecoration: 'none' }} to="/" className="logo">
        <img className="logo-image" src={logo} alt="Logo" />
        <h1 className="nav-heading">Space Travelers` Hub</h1>
      </Link>
      <div className="nav-links">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/rockets" className="nav-link">Rockets</Link>
          </li>
          <li className="nav-li">
            <Link to="/missions" className="nav-link">Missions</Link>
          </li>
          <li className="nav-li">
            <Link to="/myprofile" className="nav-link">My profile</Link>
          </li>
        </ul>
      </div>
      <hr />
    </nav>

  );
}

export default NavBar;
