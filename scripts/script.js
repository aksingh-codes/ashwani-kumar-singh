const themeSelector = document.querySelector(".theme-selector");

themeSelector.addEventListener("click", () => {
  const body = document.body;
  console.log(body);
  body.classList.toggle("dark-theme");
});
