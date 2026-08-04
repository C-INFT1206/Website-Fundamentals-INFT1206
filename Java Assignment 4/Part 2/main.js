/*
Name: C-INFT
File: main.js
Date: 03 August 2026
JavaScript for the interactive image gallery.
*/

const displayedImage =
document.querySelector(".displayed-img");

const thumbBar =
document.querySelector(".thumb-bar");

const btn =
document.querySelector("button");

const overlay =
document.querySelector(".overlay");

const images = [
{
filename: "pic1.jpg",
alt: "Closeup of a human eye"
},
{
filename: "pic2.jpg",
alt: "Rock that looks like a wave"
},
{
filename: "pic3.jpg",
alt: "Purple and white pansies"
},
{
filename: "pic4.jpg",
alt: "Section of wall from a pharaoh's tomb"
},
{
filename: "pic5.jpg",
alt: "Large moth on a leaf"
}
];

const baseURL =
"https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {
const newImage =
document.createElement("img");

newImage.src =
`${baseURL}${image.filename}`;

newImage.alt =
image.alt;

newImage.tabIndex = 0;

thumbBar.appendChild(newImage);

newImage.addEventListener(
"click",
updateDisplayedImage
);

newImage.addEventListener(
"keydown",
(event) => {
if (event.code === "Enter") {
updateDisplayedImage(event);
}
}
);
}

function updateDisplayedImage(event) {
displayedImage.src =
event.target.src;

displayedImage.alt =
event.target.alt;
}

btn.addEventListener("click", () => {
if (btn.classList.contains("dark")) {
btn.textContent = "Lighten";

overlay.style.backgroundColor =
"rgb(0 0 0 / 50%)";
} else {
btn.textContent = "Darken";

overlay.style.backgroundColor =
"rgb(0 0 0 / 0%)";
}

btn.classList.toggle("dark");
});
