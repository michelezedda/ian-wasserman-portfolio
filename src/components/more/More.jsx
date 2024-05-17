import "./more.css";
import { Link } from "react-router-dom";
import profilePic from "/profile.jpg";

function More() {
  return (
    <>
      <div className="more">
        <div className="container">
          <div className="buttons">
            <Link to="/education">
              <div>
                <img src={profilePic} alt="Education" />
                <h4>EDUCATION</h4>
              </div>
            </Link>
            <Link to="projects">
              <div>
                <img src={profilePic} alt="Projects" />
                <h4>PROJECTS</h4>
              </div>
            </Link>
            <Link to="pla">
              <div>
                <img src={profilePic} alt="PLA" />
                <h4>PLA</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
