import "./education.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ian Wasserman Portfolio - Education</title>
        <link rel="canonical" href="https://ianwasserman.netlify.app/" />
      </Helmet>
      <Navbar />
      <div className="education">
        <div className="container">
          <h2>FOUR YEARS, THREE DEGREES, TWO COLLEGES, ONE MISSION</h2>
          <p>
            Accomplishing a master's, bachelor's, and a minor is no easy task.
            However, Ian's goal of achieving high levels of academic excellence
            within a short amount of time was proven to be quite successful.
          </p>
          <div className="split">
            <div className="left">
              <h3>COLLEGE OF EARTH AND MINERAL SCIENCES</h3>
              <h4>MASTER OF SCIENCE: ENERGY AND MINERAL ENGINEERING</h4>
              <p>
                The Master's degree program in The John and Willie Leone Family
                Department of Energy and Mineral Engineering provides students
                with an integrated learning experience that addresses the
                challenges of the rapidly evolving energy and mineral
                industries. The thesis-based M.S. path allowed Ian to conduct
                research in the areas of waste resource recovery and advanced
                power generation. The Integrated Undergrad/Graduate Studies
                (IUG) program made it so Ian could complete his Master's in only
                two additional semesters.
              </p>
              <div className="btn">Go to M.S. Degree Program</div>
            </div>
            <h4>BACHELOR OF SCIENCE: ENERGY ENGINEERING</h4>
            <p>
              The Energy Engineering major prepares students to be successful
              leaders in advancing the technology and management of energy. This
              includes learning innovative and entrepreneurial approaches to the
              energy sector, gaining fundamental engineering skills,
              understanding policy and economic aspects to energy projects, and
              a commitment to environmental stewardship. Students dive deep into
              learning about various forms of energy processing and conversion,
              such as wind, hydro, solar, bio or petroleum-based fuels.
            </p>
            <div className="btn">Go to B.S. Degree Program</div>
            <h4>COURSE LIST</h4>
            <p>------------------LIST HERE--------------------</p>
          </div>
          <div className="right">
            <h3>COLLEGE OF ENGINEERING</h3>
            <h4>MINOR: ENVRIONMENTAL ENGINEERING</h4>
            <p>
              The Environmental Engineering Minor provides students with a
              comprehensive study of environmental issues and the skills needed
              to solve problems involving environmental pollution. Areas that
              are covered include water treatment and remediation, waste
              disposal, air pollution, and energy production.
            </p>
            <div className="btn">Go to Minor Degree Program</div>
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
            <div className="btn">Go to Certificate Program</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Education;
