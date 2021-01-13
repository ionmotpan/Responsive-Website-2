// *** SELECTORS ***
const links = document.querySelectorAll('.nav-link');
const navigationButton = document.querySelectorAll('.navigation-button');
const container = document.querySelector('.container');
const openNavBarIcon = document.querySelector('.open-navbar-icon');
const closeNavBarIcon = document.querySelector('.close-navbar-icon');

// EVENTS
window.addEventListener('load', () => {
  showPriceTour();
  s();
})
openNavBarIcon.addEventListener('click', openNav);
closeNavBarIcon.addEventListener('click', closeNav);

// FUNCTIONS
function showPriceTour() {
  navigationButton.forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle('change');
  }
});
}
  function s() {
    const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
    links.forEach((link, index) => {
      link.style.background = `${colors[index]}`
    });
  }

  function openNav() {
    container.classList.add('change');
  }

   function closeNav() {
    container.classList.remove('change');
  }
