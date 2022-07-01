import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaEnvelope, FaCode } from "react-icons/fa"
import { SiGatsby } from "react-icons/si"

const Footer = () => {
  return (
    <footer class="container">
      <p>Built with <SiGatsby /> and Vanilla CSS</p>
      <p>by aksingh</p>
      <div class="footer-container">
        <FaGithub />
        <FaTwitter />
        <FaLinkedin />
        <FaDiscord />
        <FaEnvelope />
      </div>
    </footer>
  );
};

export default Footer;
