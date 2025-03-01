import {ExperienceDetails} from "./ExperienceDetails";
import "../../styles/experiences.css";

function Experiences(){
    return (
        <div id = "experiences" className="experience-container">
          <div className="experience-title">
          < h2>Work Experience</h2>
          </div>
          {ExperienceDetails.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
                <div>
                  <h3>{exp.role}</h3>
                  <p>{exp.company}</p>
                  <p className="experience-duration">{exp.duration}</p>
                </div>
              </div>
              <ul className="experience-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
};

export default Experiences;