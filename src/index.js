import '../src/style.css';

const homeContents = require('../src/home');
const menuContents = require('../src/menu');
const aboutContents = require('../src/about');

const content = document.getElementById("content");
const homeButton = document.getElementById("home");
homeButton.addEventListener('click', () => {
  homeContents.homeContents(content);
  homeButton.classList.add('selected');
  menuButton.classList.remove('selected');
  aboutButton.classList.remove('selected');
});

const menuButton = document.getElementById("menu");
menuButton.addEventListener('click', () => {
  menuContents.menuContents(content);
  menuButton.classList.add('selected');
  homeButton.classList.remove('selected');
  aboutButton.classList.remove('selected');
});

const aboutButton = document.getElementById("about");
aboutButton.addEventListener('click', () => {
  aboutContents.aboutContents(content);
  aboutButton.classList.add('selected');
  homeButton.classList.remove('selected');
  menuButton.classList.remove('selected');
});

homeButton.dispatchEvent(new Event('click'));
