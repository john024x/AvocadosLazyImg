import { registerImg } from "./lazy.js";

const random = () => Math.floor(Math.random()*(122-1)) + 1;
console.log('Happy hacking :)');
const createImgNode = () => {
    const container = document.createElement('div')
    container.className = "p-4";

    const img = document.createElement('img')
    img.className ="mx-auto";
    img.width = "320";
    img.dataset.src = `https://randomfox.ca//images/${random()}.jpg`;
    container.appendChild(img);
    return container;
}
const newImg = createImgNode();
const mountNode = document.getElementById('imagenes')
const addButton = document.querySelector("#addImg");
const AddImage = () => {
    const newImg = createImgNode();
    mountNode.append(newImg);
    registerImg(newImg);
}
addButton.addEventListener("click", AddImage);
