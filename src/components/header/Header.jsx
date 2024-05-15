import "./header.css";
import { Link } from "react-router-dom";
import profilePic from "/profile.jpg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="buttons">
            <Link to="/education">
              <div>
                <img src={profilePic} alt="Education" />
                <h4>EDUCATION</h4>
                <p>Undergraduate and Graduate Studies</p>
              </div>
            </Link>
            <Link to="projects">
              <div>
                <img src={profilePic} alt="Projects" />
                <h4>PROJECTS</h4>
                <p>Various Technical Endeavors</p>
              </div>
            </Link>
            <Link to="pla">
              <div>
                <img src={profilePic} alt="PLA" />
                <h4>PLA</h4>
                <p>Presidential Leadership Academy</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
