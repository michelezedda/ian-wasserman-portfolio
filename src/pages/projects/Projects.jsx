import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import chemicalPic from "/chemical-looping.png";
import enceladusPic from "/enceladus.png";
import europaClipperPic from "/europa-clipper.png";
import shellPic from "/shell.png";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 0,
      projectTitle: "CHEMICAL-LOOPING COMBUSTION",
      projectSubtitle: "WASTE RESOURCE RECOVERY RESEARCH",
      projectDescription: `  Spring 2018 to Spring 2020 - As a part of the requirements for
      graduation in the Energy and Mineral Engineering master's
      program, Ian conducted research under the guidance of Dr. Sarma
      Pisupati. He focused on how petroleum coke ash, a waste product
      of the fossil fuel industry, can be reformatted and used as an
      oxygen carrier in chemical-looping combustion (CLC). CLC
      provides the benefits of creating a virtually 100% capture and
      sequestration-ready supply of CO2. By combining the research
      areas of advanced combustion and waste resource recovery, Ian
      hopes to pave the way for future sustainable power generation.`,
      projectImg: chemicalPic,
      projectLink:
        "https://onedrive.live.com/view.aspx?resid=1BE0632E5BED2779%2122760&authkey=!AIGax3f3DtLL7u0",
      projectNotes: "",
    },
    {
      id: 1,
      projectTitle: "EUROPA CLIPPER SPACECRAFT",
      projectSubtitle: "THERMAL ENGINEERING INTERNSHIP",
      projectDescription: ` Summer 2019 - Following his junior year, Ian returned to the
      NASA Jet Propulsion Laboratory (JPL) for a second internship. At
      JPL, he worked with the thermal engineering team for the Europa
      Clipper spacecraft. He was responsible for overseeing the tests
      of newly constructed thin film heaters that were to be installed
      at various points on the spacecraft. Utilizing advanced thermal
      modeling software, as well as performing watt density tests in a
      vacuum chamber, Ian established maximum power limits for the
      heaters which helped to guide the design principle used for the
      mission. He also got to work under Jenny Hua, who is an amazing
      mentor!`,
      projectImg: europaClipperPic,
      projectLink:
        "https://onedrive.live.com/view.aspx?resid=1BE0632E5BED2779%2117917&authkey=!AI8NWBljNR79lS8",
      projectNotes: "",
    },
    {
      id: 2,
      projectTitle: "SHELL ECO-MARATHON",
      projectSubtitle: "URBAN CONCEPT VEHICLE CAPSTONE",
      projectDescription: `Spring 2019 - As a part of his senior design project, Ian
      participated on the Shell Eco-Marathon Urban Concept Vehicle
      team at Penn State. Working on the powertrain team, Ian's
      specific responsibilities included: managing the fuel system,
      assisting with welding and manufacturing of critical components,
      and creating the vehicle's exhaust subsystem. The Eco-marathon
      team completed their vehicle in a nine week timespan, and
      successfully competed with it at the Sonoma Raceway in
      California. The vehicle achieved a fuel efficiency of 238.1 mpg,
      and did not crash once! Ian believes this was the best team
      project he ever got to work on at Penn State.`,
      projectImg: shellPic,
      projectLink:
        "https://onedrive.live.com/view.aspx?resid=1BE0632E5BED2779%2122758&authkey=!AHkXPvNWOQo4Fvg",
      projectNotes: "",
    },
    {
      id: 3,
      projectTitle: "ENCELADUS CONCEPT MISSION",
      projectSubtitle: "SYSTEMS ENGINEERING INTERNSHIP",
      projectDescription: `Summer 2018 - After his sophomore year, Ian received his first
      summer internship with the Systems Engineering division at the
      NASA Jet Propulsion Laboratory (JPL). There, he was placed on a
      discovery-class mission concept team, working on a proposal for
      a spacecraft destined to explore Enceladus, an icy moon of
      Saturn. At JPL, Ian got to know Shaun Standley, who was his
      mentor for the 10-week-long internship. Although the proposal
      was cut a few weeks after Ian returned to Penn State, the
      fantastic experience and newly obtained skills allowed Ian to
      pursue a second internship at JPL for the following summer.`,
      projectImg: enceladusPic,
      projectLink:
        "https://onedrive.live.com/?v=validatepermission&id=1BE0632E5BED2779%2113465&challengeToken=%21ANw5acOHS89bLyM",
      projectNotes:
        "*Because of the private nature of information in this presentation, please enter Ian's PSU Access ID to view presentation.",
    },
  ];

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
          <h2 className="title">PROJECTS</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                projectTitle={project.projectTitle}
                projectSubtitle={project.projectSubtitle}
                projectDescription={project.projectDescription}
                projectImg={project.projectImg}
                projectLink={project.projectLink}
                projectNotes={project.projectNotes}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
