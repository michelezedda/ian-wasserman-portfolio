import "./more.css";
import { Link } from "react-router-dom";
import educationPic from "/education.png";
import plaPic from "/pla.png";
import projectsPic from "/projects.png";

function More() {
  return (
    <>
      <div className="more">
        <div className="container">
          <div className="buttons">
            <Link to="/education">
              <div>
                <img src={educationPic} alt="Education" />
                <h4>EDUCATION</h4>
                <p>Undergraduate and Graduate Studies</p>
              </div>
            </Link>
            <Link to="projects">
              <div>
                <img src={projectsPic} alt="Projects" />
                <h4>PROJECTS</h4>
                <p>Various Technical Endeavors</p>
              </div>
            </Link>
            <Link to="pla">
              <div>
                <img src={plaPic} alt="PLA" />
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

export default More;
