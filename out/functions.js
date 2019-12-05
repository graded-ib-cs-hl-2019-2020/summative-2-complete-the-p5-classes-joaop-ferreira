"use strict";
let canvas;
let canvas_context;
function createCanvas(width, height) {
    canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    width = width;
    height = height;
    canvas_context = canvas.getContext("2d");
}
function background(color) {
    canvas_context.globalCompositeOperation = 'destination-over';
    canvas_context.fillStyle = color;
    canvas_context.fillRect(0, 0, canvas.width, canvas.height);
    canvas_context.globalCompositeOperation = 'source-over';
}
function stroke(color) {
    canvas_context.strokeStyle = color;
    canvas_context.stroke();
}
function ellipse(circle_center_x, circle_center_y, radius) {
    canvas_context.beginPath();
    canvas_context.arc(circle_center_x, circle_center_y, radius, 0, 2 * Math.PI);
}
function fill(color) {
    canvas_context.fillStyle = color;
    canvas_context.fill();
}
function line(origin_x, origin_y, end_x, end_y) {
    canvas_context.moveTo(origin_x, origin_y);
    canvas_context.lineTo(end_x, end_y);
    canvas_context.stroke();
}
function random(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}
function dist(px1, py1, px2, py2) {
    let diff_x = px1 - px2;
    let diff_y = py1 - py2;
    let distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
    return distance;
}
//# sourceMappingURL=functions.js.map