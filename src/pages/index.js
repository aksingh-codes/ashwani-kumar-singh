import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

import "../styles/global.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ashwani Kumar Singh</title>
        <link rel="canonical" href="https://ashwani-kumar-singh.netlify.app" />
      </Helmet>
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
