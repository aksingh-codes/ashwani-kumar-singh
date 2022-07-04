import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section id="home" className="pattern-dots-sm">
      <div className="container">
        <div
          className="introduction-container"
          style={{
            height: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="display-1" style={{ marginBottom: "1rem" }}>
            Hey There, I'm Ashwani
          </h1>
          <p style={{ marginBottom: "5rem" }}>
            I build responsive, beautiful, fast and secure web applications.
          </p>

          <StaticImage
            className="intro-image-container big-shadow"
            src="../images/undraw_welcoming_re_x0qo.svg"
            placeholder="tracedSVG"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
