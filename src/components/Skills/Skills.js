import React from "react";
import skills from './data'
import SkillItem from "./SkillItem";


const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="header">
          <h1>My Tech Stack</h1>
          <p>I build stuff with the following technologies.</p>
        </div>
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
