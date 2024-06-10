import {loadContent, loadMenuPage, loadAboutPage, loadCSS} from "./content"

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

loadContent();
loadCSS();

homeButton.addEventListener("click", () =>
{
    loadContent();
});
menuButton.addEventListener("click", () =>
{
    loadMenuPage();
});
aboutButton.addEventListener("click", () =>
{
    loadAboutPage();
});