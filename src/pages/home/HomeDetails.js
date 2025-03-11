import React, { useState, useEffect } from "react";


const roles = ["Full-Stack Developer", "Problem Solver", "Solution-Oriented", 
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
      Ever wondered how a perfectly crafted UI can make complex backend systems feel effortless? That’s what drives me. Currently immersed in building systems that make the invisible feel seamless."
      </p>
      <a href="#projects" className="btn">Explore My Work</a>
    </div>
  );
};

export default HomeDetails;
