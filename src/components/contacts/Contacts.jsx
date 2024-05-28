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
            <Link className="link" to={`mailto:fesfe@gmail.com`}>
              <div className="btn">
                <TbMail className="email" /> Send an email
              </div>
            </Link>
            <Link
              className="link"
              to="https://www.linkedin.com/in/ianwass/"
              target="_blank"
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
