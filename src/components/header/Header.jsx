import "./header.css";
import profilePic from "/profile.jpg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="split">
            <div className="left">
              <img src={profilePic} />
            </div>
            <div className="right">
              <h2>ABOUT IAN</h2>
              <p>
                Ian Wasserman is a graduate from the{" "}
                <b>Pennsylvania State University</b>. In June of 2020, he began
                his career as a Spacecraft Thermal Engineer for{" "}
                <b>Millennium Space Systems, a Boeing Company</b>. He continued
                his career at Millennium, gaining the title of Lead Thermal
                Engineer after completing a Critical Design Review milestone for
                a multi-vehicle spacecraft program. Branching out from thermal
                engineering, Ian joined the Environmental Test Engineering
                group. In this function, he contributed to qualification and
                acceptance testing of spacecraft hardware, and acted as test
                director for the dynamics campaign for a LEO mission. Ian
                transitioned back to the thermal peer team as an Engineering
                Manager in 2023, where he provides guidance and mentorship to a
                team of over 15 thermal engineers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
