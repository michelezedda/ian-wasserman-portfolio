import "./navbar.css";
import myLogo from "/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <img src={myLogo} />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/education">
              <a>Education</a>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link to="/pla">
              <a>PLA</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
