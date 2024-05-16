import "./socials.css";
import { TbMail } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Socials() {
  return (
    <>
      <div className="socials">
        <div className="container">
          <h2>Connect with me!</h2>
          <div className="social-medias">
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

export default Socials;
