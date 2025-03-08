import React from 'react';
import "../../styles/skills.css"; // For the styles

// Array of skill data
const skillsData = [
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/java.svg' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/mysql.svg' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/python.svg' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/react.svg' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/html5.svg' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/css3.svg' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/javascript.svg' },
];

const Skills = () => {
  return (
    <section id = "skills" className="skills-section">
      <h2>Tools Of The Present And Future</h2>
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
