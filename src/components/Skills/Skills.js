import React from "react";
import skills from './data'
import SkillItem from "./SkillItem";


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
