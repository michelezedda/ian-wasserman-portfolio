import "./header.css";
import { Link } from "react-router-dom";
import profilePic from "/profile.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="about">
            <h1>Header</h1>
            <img src={profilePic} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              animi libero ratione odit nihil non harum, reiciendis sed illo
              asperiores quae, cupiditate dolorum? Explicabo, mollitia earum
              quos optio itaque est?
            </p>
            <div className="button-wrapper">
              <Link to="Learn">
                <button>Learn about COVID-19</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
