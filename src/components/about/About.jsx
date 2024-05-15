import "./about.css";
import profilePic from "/profile.jpg";
import { TbMail } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="split">
            <div className="left">
              <img src={profilePic} />
            </div>
            <div className="right">
              <h2>ABOUT IAN</h2>
              <p>
                Ian Wasserman is a graduate from the Pennsylvania State
                University. In June of 2020, he began his career as a Spacecraft
                Thermal Engineer for Millennium Space Systems, a Boeing Company.
                He continued his career at Millennium, gaining the title of Lead
                Thermal Engineer after completing a Critical Design Review
                milestone for a multi-vehicle spacecraft program. Branching out
                from thermal engineering, Ian joined the Environmental Test
                Engineering group. In this function, he contributed to
                qualification and acceptance testing of spacecraft hardware, and
                acted as test director for the dynamics campaign for a LEO
                mission. Ian transitioned back to the thermal peer team as an
                Engineering Manager in 2023, where he provides guidance and
                mentorship to a team of over 15 thermal engineers. Ian may be
                contacted at: ian@ianwass.com.
              </p>
              <div className="social-medias">
                <Link to="/">
                  <span>
                    <TbMail />
                  </span>
                </Link>
                <Link to="/">
                  <span>
                    <FaLinkedinIn />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
