import "./header.css";
import { TbMail } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="social-medias">
            <h2>Connect with me:</h2>
            <Link
              to={`mailto:fesfe@gmail.com`}
              style={{ textDecoration: "none" }}
            >
              <div>
                <TbMail className="email" /> Send an email
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/in/ianwass/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div>
                <FaLinkedinIn className="linkedin" /> Go to Linkedin
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
