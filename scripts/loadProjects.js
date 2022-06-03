const loadProjects = () => {
  const projectsElement = document.querySelector(
    "section#projects .projects-container"
  );

  fetch("./assets/data/projects.json").then(async (response) => {
    const data = await response.json();
    const projects = data.projects;

    projects.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectsElement.appendChild(projectCard);
    });
  });
};

const createProjectCard = ({ name, img, description, repoLink, liveLink }) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card", "big-shadow");

  const screenshot = document.createElement("img");
  screenshot.src = img;
  screenshot.alt = `${name}`;
  screenshot.loading = "lazy";

  const projectCardBody = document.createElement("div");
  projectCardBody.classList.add("project-card-body");

  const projectCardBodyContent = document.createElement("div");
  projectCardBodyContent.classList.add("card-body-content");

  const titleElement = document.createElement("h3");
  titleElement.classList.add("card-title");
  titleElement.innerText = name;

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("card-description");
  descriptionElement.innerText = description;

  const cardLinks = document.createElement("div");
  cardLinks.classList.add("card-links");

  const live = document.createElement("a");
  live.href = liveLink;
  live.target = "_blank";
  live.rel = "noopener noreferrer";
  live.classList.add("btn", "card-link", "live-link");
  const linkIcon = document.createElement("i");
  linkIcon.classList.add("fa-solid", "fa-link");
  live.appendChild(linkIcon);
  live.append(" Live");

  const repo = document.createElement("a");
  repo.href = repoLink;
  repo.target = "_blank";
  repo.rel = "noopener noreferrer";
  repo.classList.add("btn", "card-link", "repository-link");
  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fa-brands", "fa-github");
  repo.appendChild(githubIcon);
  repo.append(" Code");

  liveLink && cardLinks.appendChild(live);
  repoLink && cardLinks.appendChild(repo);

  projectCardBodyContent.appendChild(titleElement);
  projectCardBodyContent.appendChild(descriptionElement);

  projectCardBody.appendChild(projectCardBodyContent);
  projectCardBody.appendChild(cardLinks);

  projectCard.appendChild(screenshot);
  projectCard.appendChild(projectCardBody);

  return projectCard;
};

loadProjects();

// target="_blank" rel="noopener noreferrer"
