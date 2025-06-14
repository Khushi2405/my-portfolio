import React from "react";
import "../../styles/contact.css"; // Link to the CSS file
import { FaGithub, FaFileAlt, FaLinkedin } from "react-icons/fa"; // Icons

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-text">
        <a href="mailto:khushiigandhi2405@gmail.com">
          <h2>Start a conversation</h2>
        </a>
      </div>
      <div className="contact-links">
        <a
          href="https://khushi2405.github.io/my-portfolio/assets/Khushi_Gandhi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaFileAlt className="contact-icon" /> {/* Resume Icon */}
          <span className="tooltip-text">Resume</span>
        </a>
        <a
          href="https://github.com/Khushi2405"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaGithub className="contact-icon" />
          <span className="tooltip-text">GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/khushi2405"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <FaLinkedin className="contact-icon" />
          <span className="tooltip-text">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
