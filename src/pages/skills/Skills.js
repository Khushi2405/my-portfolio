import React from 'react';
import "../../styles/skills.css"; // For the styles

// Array of skill data
const skillsData = [
  { logo: '../../.././assets/logos/java.svg' },
  { logo: '../../.././assets/logos/mysql.svg' },
  { logo: '../../.././assets/logos/python.svg' },
  { logo: '../../.././assets/logos/react.svg' },
  { logo: '../../.././assets/logos/html5.svg' },
  { logo: '../../.././assets/logos/css3.svg' },
  { logo: '../../.././assets/logos/java.svg' },
  { logo: '../../.././assets/logos/java.svg' },
];

const Skills = () => {
  return (
    <section id = "skills" className="skills-section">
      <h2>Tools Of The Present And Future</h2>
      <p>Technologies I Prefer Using</p>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={`${skill.name} Logo`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
