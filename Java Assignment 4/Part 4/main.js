/*
Name: C-INFT
File: main.js
Date: 31 August 2026
JavaScript for the bouncing balls and EvilCircle inheritance exercise.
*/

// Set up the canvas.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Reference to the ball counter paragraph.
const ballCountDisplay = document.querySelector("p");

// Generate a random whole number.
function random(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random RGB color.
function randomRGB() {
return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// Parent class for Ball and EvilCircle.
class Shape {
constructor(x, y, velX, velY) {
this.x = x;
this.y = y;
this.velX = velX;
this.velY = velY;
}
}

// Ball inherits position and velocity from Shape.
class Ball extends Shape {
constructor(x, y, velX, velY, color, size) {
super(x, y, velX, velY);

this.color = color;
this.size = size;
this.exists = true;
}

draw() {
ctx.beginPath();
ctx.fillStyle = this.color;

ctx.arc(
this.x,
this.y,
this.size,
0,
2 * Math.PI
);

ctx.fill();
}

update() {
if (this.x + this.size >= width) {
this.velX = -Math.abs(this.velX);
}

if (this.x - this.size <= 0) {
this.velX = Math.abs(this.velX);
}

if (this.y + this.size >= height) {
this.velY = -Math.abs(this.velY);
}

if (this.y - this.size <= 0) {
this.velY = Math.abs(this.velY);
}

this.x += this.velX;
this.y += this.velY;
}

collisionDetect() {
for (const ball of balls) {
if (this !== ball && ball.exists) {
  const dx = this.x - ball.x;
  const dy = this.y - ball.y;

  const distance = Math.sqrt(
      dx * dx + dy * dy
  );

  if (distance < this.size + ball.size) {
      const newColor = randomRGB();

      this.color = newColor;
      ball.color = newColor;
  }
}
}
}
}

// EvilCircle also inherits from Shape.
class EvilCircle extends Shape {
constructor(x, y) {
super(x, y, 20, 20);

this.color = "white";
this.size = 10;

window.addEventListener("keydown", (event) => {
switch (event.key) {
  case "a":
      this.x -= this.velX;
      break;

  case "d":
      this.x += this.velX;
      break;

  case "w":
      this.y -= this.velY;
      break;

  case "s":
      this.y += this.velY;
      break;
}
});
}

draw() {
ctx.beginPath();

ctx.lineWidth = 3;
ctx.strokeStyle = this.color;

ctx.arc(
this.x,
this.y,
this.size,
0,
2 * Math.PI
);

ctx.stroke();
}

checkBounds() {
if (this.x + this.size >= width) {
this.x -= this.size;
}

if (this.x - this.size <= 0) {
this.x += this.size;
}

if (this.y + this.size >= height) {
this.y -= this.size;
}

if (this.y - this.size <= 0) {
this.y += this.size;
}
}

collisionDetect() {
for (const ball of balls) {
if (ball.exists) {
  const dx = this.x - ball.x;
  const dy = this.y - ball.y;

  const distance = Math.sqrt(
      dx * dx + dy * dy
  );

  if (distance < this.size + ball.size) {
      ball.exists = false;

      ballCount--;

      ballCountDisplay.textContent =
          `Ball count: ${ballCount}`;
  }
}
}
}
}

// Store all of the Ball objects.
const balls = [];

// Keep track of how many balls remain.
let ballCount = 0;

// Create 25 balls.
while (balls.length < 25) {
const size = random(10, 20);

const ball = new Ball(
random(size, width - size),
random(size, height - size),
random(-7, 7),
random(-7, 7),
randomRGB(),
size
);

balls.push(ball);

ballCount++;

ballCountDisplay.textContent =
`Ball count: ${ballCount}`;
}

// Create one EvilCircle.
const evilCircle = new EvilCircle(
random(10, width - 10),
random(10, height - 10)
);

// Animation loop.
function loop() {
ctx.fillStyle = "rgb(0 0 0 / 25%)";

ctx.fillRect(
0,
0,
width,
height
);

for (const ball of balls) {
if (ball.exists) {
ball.draw();
ball.update();
ball.collisionDetect();
}
}

evilCircle.draw();
evilCircle.checkBounds();
evilCircle.collisionDetect();

requestAnimationFrame(loop);
}

loop();
