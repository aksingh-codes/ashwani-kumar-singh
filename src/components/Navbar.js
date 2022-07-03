import React, { useRef } from "react";
import { GoThreeBars } from "react-icons/go";
import Resume from "../../static/Ashwani_Kumar_Singh_resume.pdf";

const links = [
  {
    text: "SKILLS",
    link: "skills",
  },
  {
    text: "PROJECTS",
    link: "projects",
  },
  {
    text: "ABOUT",
    link: "about",
  },
  {
    text: "CONTACT",
    link: "contact",
  },
];

const Navbar = () => {
  const ref = useRef(null);

  const NavLink = ({ text, link }) => {
    return (
      <a onClick={removeNav} className="nav-item nav-link" href={`#${link}`}>
        {text}
      </a>
    );
  };

  const toggleNav = () => {
    if (ref) {
      ref.current.classList.toggle("show-nav-container");
    }
  };

  const removeNav = () => {
    if (ref) {
      ref.current.classList.remove("show-nav-container");
    }
  };

  return (
    <nav>
      <div className="navbar">
        <a
          style={{ textDecoration: "none" }}
          href="#home"
          className="nav-container"
          id="home-text"
        >
          Ashwani
        </a>

        <div className="nav-container" ref={ref}>
          {links.map((link) => (
            <NavLink {...link} />
          ))}
          <a
            style={{ color: "var(--quadinary-text-color)" }}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            // href="/assets/Ashwani_Kumar_Singh_resume.pdf"
            href={Resume}
          >
            <i className="fas fa-download"></i> RESUME
          </a>
        </div>

        <div className="nav-container">
          <div className="nav-item theme-selector">
            <GoThreeBars onClick={toggleNav} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
