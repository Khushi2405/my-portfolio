import React from 'react';
import "../../styles/skills.css"; // For the styles

// Array of skill data
const skillsData = [
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/java.svg', name: 'Java' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/python.svg', name: 'Python' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/aws.svg', name: 'AWS' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/mysql.svg', name: 'MySQL' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/react.svg',  name: 'React' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/vue.svg', name: 'Vue.js' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/html5.svg', name: 'HTML5' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/css3.svg', name: 'CSS3' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/javascript.svg', name: 'JavaScript' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/aiagent.svg', name: 'AI agents' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/jenkins.svg', name: 'Jenkins CI/CD' },
  { logo: 'https://khushi2405.github.io/my-portfolio/assets/logos/openai.svg', name: 'OpenAI SDK' },
];

const Skills = () => {
  return (
    <section id = "skills" className="skills-section">
      <h2>Current Tech Stack (always evolving)</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={`${skill.name} Logo`} title={skill.name}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
