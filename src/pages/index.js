import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

import "../styles/global.css";

const Home = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </Layout>
  );
};

export default Home;
