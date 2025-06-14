import React, { useState, useEffect } from "react";


const roles = ["Full-Stack Developer", "Unlearner", "Synthesist", 
  "Continuous Learner"
];


const HomeDetails = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="home-details">
      <h2 className="home-details-title">Hi I'm <span className = "highlight">Khushi Gandhi</span></h2>
      <p className="role-animation">
      {roles[currentRole]}
      </p>
      <p className="home-details-content">
       A Computer Science grad student at <span className = "highlight">Univeristy of Massachusetts, Amherst</span>. I love working with backend technologies like Java, Spring Boot, and SQL.
       </p>
       <p className="home-details-content">Most importantly, I’m happiest when I have no idea what I’m doing <span className = "highlight">yet</span> and a dozen tabs open to fix that.
      </p>
      <a href="#projects" className="btn">Explore My Work</a>
    </div>
  );
};

export default HomeDetails;
