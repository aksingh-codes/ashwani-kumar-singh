import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="header">
          <h1>About Me</h1>
          <p>Let me introduce myself</p>
        </div>
        <p>
          Hi 👋, I am Ashwani Kumar Singh. I find joy in building software using{" "}
          <strong>web technologies</strong>. I did an internship as a frontend
          engineer intern at <a href="zapone.io">Zapone Solutions</a>. I've
          completed Btech from Dayalbagh Educational Institute with a computer
          science specialization.
        </p>
        <p>
          {" "}
          I am proficient with <strong>javascript</strong>. I have experience
          with <strong>MERN (MongoDB, Express, React, Node.js) Stack</strong>.
          I've done projects with client-side rendering (using React, Vanilla
          JS) and server-side rendering (using Express).
        </p>
        <p>
          I also have experience with <strong>C</strong> which i used while i
          was learning <strong>Data Structures and Algorithms</strong>.
        </p>
        <br />
        <p>
          <strong>
            Hobbies and Interests
          </strong>
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            Linux <i className="fab fa-linux"></i>
          </li>
          <li>PC Games</li>
          <li>Anime</li>
        </ul>
        <br />
      </div>
    </section>
  );
};

export default About;
