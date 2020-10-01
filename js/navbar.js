const navButton = document.getElementById("nav-button");
const navList = document.getElementById("nav-list");

function unrollMenu() {
  navList.style.height = "unset";
  const { height } = navList.getBoundingClientRect();
  navList.style.height = `0`;

  //2 requestAnimationFrame to trigger transition properly
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      navList.style.height = `${height}px`;
    });
  });
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
