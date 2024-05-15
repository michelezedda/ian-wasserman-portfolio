import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="split">
            <h1>IAN WASSERMAN</h1>
            <p>An Engineering Portfolio</p>
            <Link to="Learn">
              <button>Button</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
