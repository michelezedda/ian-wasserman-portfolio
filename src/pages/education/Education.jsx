import "./education.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Contacts from "../../components/contacts/Contacts";

function Education() {
  const [isVisibleEduCard3, setIsVisibleEduCard3] = useState(false);
  const [isVisibleEduCard4, setIsVisibleEduCard4] = useState(false);
  const [isVisibleEduCard5, setIsVisibleEduCard5] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [refEduCard3, inViewEduCard3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refEduCard4, inViewEduCard4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refEduCard5, inViewEduCard5] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewEduCard3) setIsVisibleEduCard3(true);
  }, [inViewEduCard3]);

  useEffect(() => {
    if (inViewEduCard4) setIsVisibleEduCard4(true);
  }, [inViewEduCard4]);

  useEffect(() => {
    if (inViewEduCard5) setIsVisibleEduCard5(true);
  }, [inViewEduCard5]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const projectsElement = document.querySelector(".education");
    projectsElement.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ian Wasserman Portfolio - Education</title>
        <link rel="canonical" href="https://ianwasserman.netlify.app/" />
      </Helmet>
      <Navbar />
      <Contacts />
      <div className="education">
        <div className="container">
          <h2 className="title">
            FOUR YEARS, THREE DEGREES, TWO COLLEGES, ONE MISSION
          </h2>
          <h4>
            Accomplishing a master's, bachelor's, and a minor is no easy task.
            However, Ian's goal of achieving high levels of academic excellence
            within a short amount of time was proven to be quite successful.
          </h4>
          <div className="first-education-row">
            <h3>COLLEGE OF EARTH AND MINERAL SCIENCES</h3>
            <div className="first-education-row-container">
              <div className="edu-card1">
                <h4>MASTER OF SCIENCE: ENERGY AND MINERAL ENGINEERING</h4>
                <p>
                  The Master's degree program in The John and Willie Leone
                  Family Department of Energy and Mineral Engineering provides
                  students with an integrated learning experience that addresses
                  the challenges of the rapidly evolving energy and mineral
                  industries. The thesis-based M.S. path allowed Ian to conduct
                  research in the areas of waste resource recovery and advanced
                  power generation. The Integrated Undergrad/Graduate Studies
                  (IUG) program made it so Ian could complete his Master's in
                  only two additional semesters.
                </p>
              </div>
              <div className="edu-card2">
                <h4>BACHELOR OF SCIENCE: ENERGY ENGINEERING</h4>
                <p>
                  The Energy Engineering major prepares students to be
                  successful leaders in advancing the technology and management
                  of energy. This includes learning innovative and
                  entrepreneurial approaches to the energy sector, gaining
                  fundamental engineering skills, understanding policy and
                  economic aspects to energy projects, and a commitment to
                  environmental stewardship. Students dive deep into learning
                  about various forms of energy processing and conversion, such
                  as wind, hydro, solar, bio or petroleum-based fuels.
                </p>
              </div>
            </div>
          </div>
          <div className="second-education-row">
            <div
              className={`edu-card3 ${isVisibleEduCard3 ? "visible" : ""}`}
              ref={refEduCard3}
            >
              <h3>COLLEGE OF ENGINEERING</h3>
              <h4>MINOR: ENVRIONMENTAL ENGINEERING</h4>
              <p>
                The Environmental Engineering Minor provides students with a
                comprehensive study of environmental issues and the skills
                needed to solve problems involving environmental pollution.
                Areas that are covered include water treatment and remediation,
                waste disposal, air pollution, and energy production.
              </p>
            </div>
            <div
              className={`edu-card4 ${isVisibleEduCard4 ? "visible" : ""}`}
              ref={refEduCard4}
            >
              <h3>INTRACOLLEGIATE</h3>
              <h4>CERTIFICATE: THE PRESIDENTIAL LEADERSHIP ACADEMY</h4>
              <p>
                The Presidential Leadership Academy (PLA) allows students to
                develop leadership fundamentals and thrive in environments where
                multiple dimensions of an issue are explored. This leadership
                program provides members with the ability to engage in diverse
                conversation, and embrace new cultural experiences through
                semesterly trips.
              </p>
            </div>
          </div>
          <div
            className={`edu-card5 ${isVisibleEduCard5 ? "visible" : ""}`}
            ref={refEduCard5}
          >
            <h3 onClick={toggleDropdown} style={{ cursor: "pointer" }}>
              COURSE LIST &nbsp;&nbsp;&nbsp;
              {isDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
            </h3>
            {isDropdownOpen && (
              <p>
                <b>Transfer Credits from High School</b>
                <ul>
                  <li>GER 2 - Elementary German II</li>
                  <li>MATH 41 - Analytic Geometry</li>
                  <li>MATH 140 - Calculus I</li>
                  <li>MATH 141 - Calculus II</li>
                  <li>PHYS 211 - Mechanics</li>
                  <li>PHYS 212 - Electricity and Magnetism</li>
                  <li>PHYS 250 - Intro to Physics I</li>
                </ul>
                <b>Fall 2016</b>
                <ul>
                  <li>CHEM 110 - Chemical Principles I</li>
                  <li>ECON 102 - Microeconomics</li>
                  <li>EMSC 100 - First Year Seminar - College of EMS</li>
                  <li>GER 3 - Intermediate German</li>
                  <li>
                    MATH 251 - Ordinary and Partial Differential Equations
                  </li>
                  <li>MUSIC 79 - Pep Band</li>
                </ul>
                <b>Spring 2017</b>
                <ul>
                  <li>CHEM 111 - Experimental Chemistry I</li>
                  <li>CHEM 112 - Chemical Principles II</li>
                  <li>CMPSC 200 - Programming for Engineering - MATLAB</li>
                  <li>EE 211 - Electronic Circuits and Power Distribution</li>
                  <li>
                    EME 301 - Thermodynamics in Energy and Mineral Engineering
                  </li>
                  <li>ENGL 15A - Rhetoric and Composition</li>
                  <li>MATH 231 - Calculus of Several Variables</li>
                  <li>MUSIC 79 - Pep Band</li>
                </ul>
                <b>Fall 2017</b>
                <ul>
                  <li>CHEM 202 - Fundamentals of Organic Chemistry I</li>
                  <li>EGEE 302 - Principles of Energy Engineering</li>
                  <li>
                    EME 303 - Fluid Mechanics in Energy and Mineral Engineering
                  </li>
                  <li>EME 460 - Geo-Resource Evaluation and Economic Risk</li>
                  <li>HONOR 201H - Critical Thinking Leadership </li>
                  <li>MATSE 201 - Introduction to Material Science</li>
                  <li>MUSIC 79 - Pep Band</li>
                </ul>
                <b>Spring 2018</b>
                <ul>
                  <li>EGEE 304 - Heat and Mass Transfer</li>
                  <li>EGEE 438 Wind and Hydro Energy Conversion</li>
                  <li>FSC 431 - Chemistry of Fuels</li>
                  <li>HONOR 301 - Role of Knowledge</li>
                  <li>KINES 84 - Fitness for Life</li>
                  <li>MUSIC 79 - Pep Band</li>
                  <li>PHIL 103 - Intro to Ethics</li>
                </ul>
                <b>Fall 2018</b>
                <ul>
                  <li>CE 370 - Introduction to Environmental Engineering</li>
                  <li>EGEE 12 - Energy Engineering Lecture</li>
                  <li>EGEE 430 - Introduction to Combustion</li>
                  <li>EGEE 441 - Electrochemical Energy Conversion</li>
                  <li>FSC 432 - Petroleum Processing</li>
                  <li>FSC 503 - Analytical Methods in Fuel Science</li>
                  <li>HONOR 401 - Honors Seminar</li>
                </ul>
                <b>Spring 2019</b>
                <ul>
                  <li>EGEE 411W - Energy Engineering Lab</li>
                  <li>EGEE 437 - Solar Energy Conversion</li>
                  <li>EGEE 439 - Alternative Fuels and Biomass</li>
                  <li>ENGR 411 - Entrepreneurship Business Basics</li>
                  <li>KINES 72 - Fitness Walking</li>
                  <li>ME 440 - Mechanical Systems Design - Capstone</li>
                </ul>
                <b>Fall 2019</b>
                <ul>
                  <li>ANTH 140 - Anthropology of Alcohol</li>
                  <li>EGEE 494 - Research Project</li>
                  <li>EME 501 - Systems Design and Uncertainty</li>
                  <li>EME 531 - Modern Thermodynamics</li>
                  <li>EME 600 - Thesis Research</li>
                  <li>HONOR 401 - Honors Seminar</li>
                </ul>
                <b>Spring 2020</b>
                <ul>
                  <li>BRS 551 - Sustainable Business Strategy</li>
                  <li>
                    BRS 596 - Individual Studies CHE 597 - Inorganic Energy
                  </li>
                  <li>
                    Materials EME 551 - Safety Health and Environmental Risks
                    EME
                  </li>
                  <li>600 - Thesis Research</li>
                </ul>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Education;
