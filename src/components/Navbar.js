import React from "react";
import {BsSun} from "react-icons/bs"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">

        <div className="nav-container" id="home-text">
          Ashwani
        </div>

        <div className="nav-container">
          <a className="nav-item nav-link" href="#skills">
            SKILLS
          </a>
          <a className="nav-item nav-link" href="#projects">
            PROJECTS
          </a>
          <a className="nav-item nav-link" href="#about">
            ABOUT
          </a>
          <a className="nav-item nav-link" href="#contact">
            CONTACT
          </a>
          <a
            style={{ color: "var(--quadinary-text-color)" }}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            href="./assets/Ashwani_Kumar_Singh_resume.pdf"
          >
            <i className="fas fa-download"></i> RESUME
          </a>
        </div>

        {/* <div className="nav-container">
          <div className="nav-item theme-selector">
            <BsSun />
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon hidden"></i>
            <p></p>
          </div>
        </div> */}

      </div>
    </nav>
  );
};

export default Navbar;
