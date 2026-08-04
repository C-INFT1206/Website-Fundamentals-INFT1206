/*
Name: YOUR NAME
File: main.js
Date: 03 August 2026
JavaScript for generating randomized silly stories.
*/

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
const random = Math.floor(Math.random() * array.length);
return array[random];
}



