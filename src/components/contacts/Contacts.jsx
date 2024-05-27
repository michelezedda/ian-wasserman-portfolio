import "./contacts.css";
import { TbMail } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <>
      <div className="contacts">
        <div className="container">
          <div className="social-medias">
            <h3>Connect with me:</h3>
            <Link
              to={`mailto:fesfe@gmail.com`}
              style={{ textDecoration: "none" }}
            >
              <div className="btn">
                <TbMail className="email" /> Send an email
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/in/ianwass/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="btn">
                <FaLinkedinIn className="linkedin" /> Go to Linkedin
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
