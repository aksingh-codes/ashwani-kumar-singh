const loadSkills = () => {
  const skillselement = document.querySelector(
    "section#skills .skills-container"
  );
  const frontendElement = skillselement.querySelector(
    ".frontend .domain-skills-container"
  );
  const backendElement = skillselement.querySelector(
    ".backend .domain-skills-container"
  );
  const toolsElement = skillselement.querySelector(
    ".tools .domain-skills-container"
  );

  fetch("./assets/data/skills.json").then(async (response) => {
    const data = await response.json();
    const skills = data.skills;
    const frontendSkills = skills.frontend;
    const backendSkills = skills.backend;
    const toolsSkills = skills.tools;

    frontendElement.querySelector(".loader").remove();
    backendElement.querySelector(".loader").remove();
    toolsElement.querySelector(".loader").remove();

    frontendSkills.forEach((skill) => {
      const skillCard = createSkillCard(skill);
      frontendElement.appendChild(skillCard);
    });

    backendSkills.forEach((skill) => {
      const skillCard = createSkillCard(skill);
      backendElement.appendChild(skillCard);
    });

    toolsSkills.forEach((skill) => {
      const skillCard = createSkillCard(skill);
      toolsElement.appendChild(skillCard);
    });
  });
};

const createSkillCard = ({ name, faclass, img }) => {
  const skillCard = document.createElement("div");
  const logo = document.createElement("img");
  logo.src = img;
  logo.height = "90";

  const nameElement = document.createElement("p");
  nameElement.innerText = name;

  skillCard.appendChild(logo);
  skillCard.appendChild(nameElement);
  skillCard.classList.add("skill-card");

  return skillCard;
};

loadSkills();
