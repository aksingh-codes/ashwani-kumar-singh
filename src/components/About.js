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
          Hey! 👋 Ashwani Kumar Singh here, a frontend developer passionate
          about crafting delightful web experiences. Currently at{" "}
          <a
            target="_blanck"
            referrerPolicy="no-referrer"
            href="https://www.nonalifestyle.com/"
          >
            NONA Lifestyle
          </a>
          , I serve as a Software Engineer Frontend, specializing in projects
          using JavaScript, TypeScript, React, Next.js, Tailwind CSS, React
          Query, and shadcn/ui. During the{" "}
          <a
            target="_blanck"
            referrerPolicy="no-referrer"
            href="https://zapone.io/"
          >
            Zapone Solutions
          </a>{" "}
          internship, my focus was on frontend development. Hold a B.Tech in
          Civil Engineering with Computer Science Specialization from Dayalbagh
          Educational Institute.
        </p>
        <br />
        <p>
          <strong>Tech Expertise</strong>
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            Proficient in JavaScript and TypeScript, using React and Next.js for
            dynamic user interfaces.
          </li>
          <li>
            Enjoy exploring the frontend realm with technologies like Tailwind
            CSS, React Query, and shadcn/ui.
          </li>
        </ul>
        <br />
        <p>
          <strong>Current Focus</strong>
        </p>
        <p>
          Deeply involved in crafting engaging frontend solutions at NONA
          Lifestyle.
        </p>
        <br />
      </div>
    </section>
  );
};

export default About;
