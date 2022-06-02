let theme = localStorage.getItem("theme") || "light";
const themeSelector = document.querySelector(".theme-selector");

const body = document.body;

if (theme === "light") {
  switchToLight();
} else {
  switchToDark();
}
saveTheme();

themeSelector.addEventListener("click", () => {
  if (theme === "light") {
    switchToDark();
  } else {
    switchToLight();
  }
  saveTheme();
});

function switchToLight() {
  theme = "light";
  body.classList.remove("dark-theme");
  themeSelector.querySelector(".fa-sun").classList.remove("hidden");
  themeSelector.querySelector(".fa-moon").classList.add("hidden");
  // themeSelector.querySelector("p").innerText = "Light Mode";
}

function switchToDark() {
  theme = "dark";
  body.classList.add("dark-theme");
  themeSelector.querySelector(".fa-sun").classList.add("hidden");
  themeSelector.querySelector(".fa-moon").classList.remove("hidden");
  // themeSelector.querySelector("p").innerText = "Dark Mode";
}

function saveTheme() {
  localStorage.setItem("theme", theme);
}
