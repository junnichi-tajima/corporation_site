const target = document.getElementById("hamburger-menu-button");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  document.getElementById("side-bar").classList.toggle('open');
});

