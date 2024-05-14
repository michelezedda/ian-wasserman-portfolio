import "./navbar.css";
import myLogo from "/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img src={myLogo} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
