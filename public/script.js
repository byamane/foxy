const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const main = document.getElementsByClassName('content-push')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  main.classList.toggle('active')
})