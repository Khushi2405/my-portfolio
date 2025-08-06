import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

  const ProjectCard = ({ project, isLeftAligned }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);
  
    return (
      <div
        ref={cardRef}
        className={`project-card ${isLeftAligned ? "left-aligned" : "right-aligned"} ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <div className="project-media">
          <a href={project.project_link} target="_blank" rel="noopener noreferrer">
            {project.video ? (
              <video src={project.video} controls width="100%" />
            ) : (
              <img src={project.image} alt={`${project.title} thumbnail`} />
            )}
          </a>
        </div>
        <div className="project-text">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title-link">
          <h3>
            {project.title}
            <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" />
          </h3>
        </a>
          <ul>
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  