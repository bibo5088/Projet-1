const navButton = document.getElementById('nav-button');
const navList = document.getElementById('nav-list');

navButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});