const target = document.getElementById("hamburger-menu-button");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  document.getElementById("side-bar").classList.toggle('open');

  let hiddenList = document.getElementsByClassName("hidden");
  for (let i = 0; i < hiddenList.length; i++){
    hiddenList[i].classList.toggle('open');
  }
});

