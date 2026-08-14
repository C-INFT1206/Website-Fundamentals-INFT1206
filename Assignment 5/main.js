/*
Name: C-INFT
File: main.js
Date: 13 August 2026
JavaScript for bears.
*/

// Functionality for showing and hiding the comments section

const showHideBtn = document.querySelector(".show-hide");
const commentWrapper = document.querySelector(".comment-wrapper");

// Hide comments when JavaScript loads
commentWrapper.hidden = true;

showHideBtn.addEventListener("click", function () {
const isExpanded = showHideBtn.getAttribute("aria-expanded") === "true";

if (isExpanded) {
showHideBtn.setAttribute("aria-expanded", "false");
showHideBtn.textContent = "Show comments";
commentWrapper.hidden = true;
} else {
showHideBtn.setAttribute("aria-expanded", "true");
showHideBtn.textContent = "Hide comments";
commentWrapper.hidden = false;
}
});

// Functionality for adding a new comment

const form = document.querySelector(".comment-form");
const nameField = document.querySelector("#name");
const commentField = document.querySelector("#comment");
const list = document.querySelector(".comment-container");

form.addEventListener("submit", function (event) {
event.preventDefault();
submitComment();
});

function submitComment() {
const listItem = document.createElement("li");
const namePara = document.createElement("p");
const commentPara = document.createElement("p");

const nameValue = nameField.value;
const commentValue = commentField.value;

namePara.textContent = nameValue;
commentPara.textContent = commentValue;

listItem.appendChild(namePara);
listItem.appendChild(commentPara);
list.appendChild(listItem);

nameField.value = "";
commentField.value = "";
}
