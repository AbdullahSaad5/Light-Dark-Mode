const themeSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  toggleIllustrations("light");
}

function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  toggleIllustrations("dark");
}

function toggleIllustrations(theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

themeSwitch.addEventListener("change", switchTheme);

const selectedTheme = localStorage.getItem("theme");

if (selectedTheme) {
  if (selectedTheme === "dark") {
    themeSwitch.checked = true;
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  }
}
