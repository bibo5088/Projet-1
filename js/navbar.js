const navButton = document.getElementById("nav-button");
const navList = document.getElementById("nav-list");

function unrollMenu() {
  navList.style.height = "unset";
  const { height } = navList.getBoundingClientRect();
  navList.style.height = `0`;

  //setTimeout instead of requestAnimationFrame because requestAnimationFrame is called before render and we need to change the style post render for the transition to work
  setTimeout(() => {
    navList.style.height = `${height}px`;
  }, 0);
}

function rollMenu() {
  navList.style.height = `0`;
}

let menuActive = false;

navButton.addEventListener("click", () => {
  if (menuActive) rollMenu();
  else unrollMenu();

  menuActive = !menuActive;
});

const message = "Merci pour votre message."
document.getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
