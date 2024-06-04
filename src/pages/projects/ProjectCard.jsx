import "./projects.css";
import { Link } from "react-router-dom";

function ProjectCard({
  projectTitle,
  projectDescription,
  projectSubtitle,
  projectLink,
  projectImg,
  projectNotes,
  className,
}) {
  return (
    <>
      <div className={`project-card ${className}`}>
        <h3 className="project-name">{projectTitle}</h3>
        <h4 className="project-subtitle">{projectSubtitle}</h4>
        <img src={projectImg} alt={projectTitle} />
        <p className="project-description">{projectDescription}</p>
        <div className="project-links" className="project-btn">
          <Link className="link" to={projectLink} target="_blank">
            <a>Go to presentation</a>
          </Link>
        </div>
        <p className="project-notes">{projectNotes}</p>
      </div>
    </>
  );
}

export default ProjectCard;
