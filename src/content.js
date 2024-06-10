import penguin from "./penguin.jpeg";
import "./style.css";

function loadContent()
{
    const content = removeContent();

    //penguin image
    const penguinImage = new Image();
    penguinImage.src = penguin;
    penguinImage.width = 800;
    penguinImage.height = 600;

    //breaking news
    const breakingNews = document.createElement('h2');
    breakingNews.textContent = "Breaking News: Penguins Were Found in Antarctica!";

    //paragraph
    const par = document.createElement('p');
    par.textContent = "Over the summer, our news reporter Jimmy John found multiple penguins in Antarctica. Awesome!";

    content.appendChild(penguinImage);
    content.appendChild(breakingNews);
    content.appendChild(par);
}
function loadMenuPage()
{
    const content = removeContent();
    //title
    const title = document.createElement('h1');
    title.textContent = "Menu";

    //menu
    const list = document.createElement('ul');
    const menuItems = ["Salmon", "Fish", "Chicken", "Salad", "Water", "Coke"];
    for(let i = 0; i < menuItems.length; i++)
    {
        const element = document.createElement('li');
        element.textContent = menuItems[i];
        list.appendChild(element);
    }

    //thanks
    const thanks = document.createElement('h3');
    thanks.textContent = "Thank you, we hope you like our food!";

    content.appendChild(title);
    content.appendChild(list);
    content.appendChild(thanks);
}
function loadAboutPage()
{
    const content = removeContent();

    //title
    const title = document.createElement('h1');
    title.textContent = "About";

    //paragraph
    const par = document.createElement('p');
    par.textContent = "My name is Andrew Presta and I hope you enjoy my restaurant. Here at Andrew's Restaurant, we take great care in our food and the customers we serve it to.";

    //contact button
    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact Me";

    content.appendChild(title);
    content.appendChild(par);
    content.appendChild(contactButton);

}
function removeContent()
{
    const content = document.querySelector('#content');
    const contentItems = Array.from(content.children);
    for(let i = 0; i < contentItems.length; i++)
    {
        //remove content children
        contentItems[i].remove();
    }
    return content;
}
function loadCSS()
{
    document.body.classList.add('content-css');
}

export {loadContent, loadMenuPage, loadAboutPage, loadCSS};