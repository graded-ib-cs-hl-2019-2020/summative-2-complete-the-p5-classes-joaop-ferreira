import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let numBubbles = 10;
let numBalls = 10;
let numFlakes = 10;
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
let windRange = document.getElementById("wind_slider");
let windLabel = document.getElementById("wind_value");
let windForce = Number(windRange.value) / 10;
windRange.addEventListener("change", onWind_Change, true);
function onWind_Change() {
    windForce = Number(windRange.value) / 10;
    console.log("a" + windForce);
    windLabel.innerText = "wind force:" + windForce;
}
let gravityRange = document.getElementById("gravity_slider");
let gravityLabel = document.getElementById("gravity_value");
let gravityForce = Number(gravityRange.value) / 10;
gravityRange.addEventListener("change", onGravityChange, true);
function onGravityChange() {
    gravityForce = Number(gravityRange.value) / 10;
    console.log("a" + gravityForce);
    gravityLabel.innerText = "gravity force:" + gravityForce;
}
function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls.push(new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), "red", "black"));
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles.push(new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50), "#e0fffe", "white"));
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes.push(new Snowflake(random(25, width - 25), random(25, height - 25), random(5, 20), "white"));
    }
}
function draw() {
    background("skyblue");
    for (let i = 0; i < numBalls; i++) {
        balls[i].draw();
        balls[i].move();
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i].set_wind(windForce);
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i].set_gravity(gravityForce);
        snowflakes[i].draw();
        snowflakes[i].move();
    }
    console.log("called onwind");
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map