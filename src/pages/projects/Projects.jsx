import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ian Wasserman Portfolio - Projects</title>
        <link rel="canonical" href="https://ianwasserman.netlify.app/" />
      </Helmet>
      <Navbar />
      <div className="projects">
        <div className="container">
          <h2>PROJECTS</h2>
          <div className="split">
            <div className="left">
              <h3>CHEMICAL-LOOPING COMBUSTION</h3>
              <h4>WASTE RESOURCE RECOVERY RESEARCH</h4>
              <p>
                Spring 2018 to Spring 2020 - As a part of the requirements for
                graduation in the Energy and Mineral Engineering master's
                program, Ian conducted research under the guidance of Dr. Sarma
                Pisupati. He focused on how petroleum coke ash, a waste product
                of the fossil fuel industry, can be reformatted and used as an
                oxygen carrier in chemical-looping combustion (CLC). CLC
                provides the benefits of creating a virtually 100% capture and
                sequestration-ready supply of CO2. By combining the research
                areas of advanced combustion and waste resource recovery, Ian
                hopes to pave the way for future sustainable power generation.
              </p>
              <div className="btn">
                Chemical-looping combustion presentation
              </div>
            </div>
            <h3>EUROPA CLIPPER SPACECRAFT</h3>
            <h4>THERMAL ENGINEERING INTERNSHIP</h4>
            <p>
              Summer 2019 - Following his junior year, Ian returned to the NASA
              Jet Propulsion Laboratory (JPL) for a second internship. At JPL,
              he worked with the thermal engineering team for the Europa Clipper
              spacecraft. He was responsible for overseeing the tests of newly
              constructed thin film heaters that were to be installed at various
              points on the spacecraft. Utilizing advanced thermal modeling
              software, as well as performing watt density tests in a vacuum
              chamber, Ian established maximum power limits for the heaters
              which helped to guide the design principle used for the mission.
              He also got to work under Jenny Hua, who is an amazing mentor!
            </p>
            <div className="btn">
              Europa Clipper thermal engineering presentation
            </div>
          </div>
          <div className="right">
            <h3>SHELL ECO-MARATHON</h3>
            <h4>URBAN CONCEPT VEHICLE CAPSTONE</h4>
            <p>
              Spring 2019 - As a part of his senior design project, Ian
              participated on the Shell Eco-Marathon Urban Concept Vehicle team
              at Penn State. Working on the powertrain team, Ian's specific
              responsibilities included: managing the fuel system, assisting
              with welding and manufacturing of critical components, and
              creating the vehicle's exhaust subsystem. The Eco-marathon team
              completed their vehicle in a nine week timespan, and successfully
              competed with it at the Sonoma Raceway in California. The vehicle
              achieved a fuel efficiency of 238.1 mpg, and did not crash once!
              Ian believes this was the best team project he ever got to work on
              at Penn State.
            </p>
            <div className="btn">Eco-marathon vehicle presentation</div>
            <h3>ENCELADUS CONCEPT MISSION</h3>
            <h4>SYSTEMS ENGINEERING INTERNSHIP</h4>
            <p>
              Summer 2018 - After his sophomore year, Ian received his first
              summer internship with the Systems Engineering division at the
              NASA Jet Propulsion Laboratory (JPL). There, he was placed on a
              discovery-class mission concept team, working on a proposal for a
              spacecraft destined to explore Enceladus, an icy moon of Saturn.
              At JPL, Ian got to know Shaun Standley, who was his mentor for the
              10-week-long internship. Although the proposal was cut a few weeks
              after Ian returned to Penn State, the fantastic experience and
              newly obtained skills allowed Ian to pursue a second internship at
              JPL for the following summer.
            </p>
            <div className="btn">Enceladus mission concept presentation*</div>
            *Because of the private nature of information in this presentation,
            please enter Ian's PSU Access ID to view presentation. Not for
            public access.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
