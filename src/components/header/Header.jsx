import "./header.css";
import { Link } from "react-router-dom";
import educationPic from "/education.png";
import projectsPic from "/projects.png";
import plaPic from "/pla.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h1>IAN WASSERMAN</h1>
          <p>An Engineering Portfolio</p>
          <div className="buttons">
            <Link to="/education">
              <div>
                <img src={educationPic} /> <h4>EDUCATION</h4>{" "}
                <p>Undergraduate and Graduate Studies</p>
              </div>
            </Link>
            <Link to="projects">
              <div>
                <img src={projectsPic} />
                <h4>PROJECTS</h4> <p>Various Technical Endeavors</p>
              </div>
            </Link>
            <Link to="pla">
              <div>
                <img src={plaPic} />
                <h4>PLA</h4> <p>Presidential Leadership Academy</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
