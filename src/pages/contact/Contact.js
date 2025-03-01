import React from "react";
import "../../styles/contact.css"; // Link to the CSS file
import { FaGithub, FaFileAlt, FaLinkedin } from "react-icons/fa"; // Icons

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <a href="mailto:khushiigandhi2405@gmail.com">
          <h2>Start a conversation</h2>
        </a>
      </div>
      <div className="contact-links">
        <a
          href="/assets/KHUSHI_GANDHI_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt className="contact-icon" /> {/* Resume Icon */}
        </a>
        <a
          href="https://github.com/Khushi2405"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
        </a>

        <a
          href="https://linkedin.com/in/khushi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
