import "./more.css";
import { Link } from "react-router-dom";
import educationPic from "/education.png";
import projectsPic from "/projects.png";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function More() {
  const [isVisibleButton1, setIsVisibleButton1] = useState(false);
  const [isVisibleButton2, setIsVisibleButton2] = useState(false);

  const [refButton1, inViewButton1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refButton2, inViewButton2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewButton1) setIsVisibleButton1(true);
  }, [inViewButton1]);

  useEffect(() => {
    if (inViewButton2) setIsVisibleButton2(true);
  }, [inViewButton2]);

  return (
    <>
      <div className="more">
        <div className="container">
          <div className="buttons">
            <Link to="/education">
              <div
                className={`button1 ${isVisibleButton1 ? "visible" : ""}`}
                ref={refButton1}
              >
                <img src={educationPic} alt="Education" />
                <h4>EDUCATION</h4>
                <p>Undergraduate and Graduate Studies</p>
              </div>
            </Link>
            <Link to="projects">
              <div
                className={`button2 ${isVisibleButton2 ? "visible" : ""}`}
                ref={refButton2}
              >
                <img src={projectsPic} alt="Projects" />
                <h4>PROJECTS</h4>
                <p>Various Technical Endeavors</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
