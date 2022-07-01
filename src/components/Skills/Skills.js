import React from "react";
import { FaGitAlt, FaLinux, FaReact, FaCss3, FaBootstrap } from "react-icons/fa"
import { SiVisualstudiocode, SiPython, SiJava, SiC, SiJavascript, SiRedux, SiJquery, SiMaterialui, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"

import SkillItem from "./SkillItem";

const skills = [
  {
    type: "frontend", skills: [
      { name: "html", icon: AiFillHtml5 },
      { name: "css", icon: FaCss3 },
      { name: "javascript", icon: SiJavascript },
      { name: "react", icon: FaReact },
      { name: "bootstrap", icon: FaBootstrap },
      { name: "redux", icon: SiRedux },
      { name: "jQuery", icon: SiJquery },
      { name: "materialUI", icon: SiMaterialui }]
  },

  {
    type: "backend", skills: [
      { name: "node.js", icon: SiNodedotjs },
      { name: "express", icon: SiExpress },
      { name: "mongoDB", icon: SiMongodb },
      { name: "c", icon: SiC },
      { name: "java", icon: SiJava },
      { name: "python", icon: SiPython }
    ]
  },

  {
    type: "tools", skills: [
      { name: "git", icon: FaGitAlt },
      { name: "github", icon: BsGithub },
      { name: "vscode", icon: SiVisualstudiocode },
      { name: "linux", icon: FaLinux }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="flex-skills">
            <div className="flex-skills-box">
              <div className="flex-skills-box-body">
                {skills[0].skills.map(skill => <SkillItem skill={skill} />)}
              </div>
            </div>
            <div className="flex-skills-box">
              <h2>
                Frontend
              </h2>
            </div>
          </div>
          <div className="flex-skills">
            <div className="flex-skills-box">
              <h2>
                Backend
              </h2>
            </div>
            <div className="flex-skills-box">
              <div className="flex-skills-box-body">
                {skills[1].skills.map(skill => <SkillItem skill={skill} />)}
              </div>
            </div>
          </div>
          <div className="flex-skills">
            <div className="flex-skills-box">
              <div className="flex-skills-box-body">
                {skills[2].skills.map(skill => <SkillItem skill={skill} />)}
              </div>
            </div>
            <div className="flex-skills-box">
              <h2>
                Tools
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
