import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGatsby } from "react-icons/si";

const Footer = () => {
  return (
    <footer class="container">
      <p>
        Built with <SiGatsby /> and Vanilla CSS
      </p>
      <p>by aksingh</p>
      <div class="footer-container">
        <a href="https://github.com/aksingh-codes">
          <FaGithub />
        </a>
        <a href="https://twitter.com/aksingh_codes">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/aksingh-codes/">
          <FaLinkedin />
        </a>

        <a href="mailto://dev.ashwani.kumar.singh@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
