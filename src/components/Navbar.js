import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        {/* <li><a target="_blank" href="https://khushi2405-personagpt.hf.space" title="Ask AI anything about me">PersonaGPT</a></li> */}
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://khushi2405.github.io/my-portfolio/assets/Khushi_Gandhi_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
