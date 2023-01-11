import { NavLink } from 'react-router-dom';
import logo from '../logo/planet.png';
import './Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      {/* <Link "> */}
      <div style={{ textDecoration: 'none' }} to="/" className="logo">
        <img className="logo-image" src={logo} alt="Logo" />
        <h1 className="nav-heading">Space Travelers` Hub</h1>
      </div>
      {/* </Link> */}
      <div className="nav-links">
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink
              to="/"
              className="nav-link"
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/missions"
              className="nav-link"
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/myprofile"
              className="nav-link"
            >
              My profile
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
    </nav>

  );
}

export default NavBar;
