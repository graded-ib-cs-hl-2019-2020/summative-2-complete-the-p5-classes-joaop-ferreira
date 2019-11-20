let canvas: HTMLCanvasElement;
let canvas_context: CanvasRenderingContext2D;

let width: number;
let height: number;

let mouseX: number;
let mouseY: number;

function createCanvas(width: number, height: number) {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');

    canvas.width = width;
    canvas.height = height;

    width = width;
    height = height;

    canvas_context = <CanvasRenderingContext2D>canvas.getContext("2d");
}
//configures the color of the border of an object
function stroke(color: string) {
    canvas_context.strokeStyle = color;
    canvas_context.stroke();

}
//this function is what creates the circle
function ellipse(circle_center_x: number, circle_center_y: number, radius: number) {
    canvas_context.beginPath();
    canvas_context.arc(circle_center_x, circle_center_y, radius, 0, 2 * Math.PI);
}

//fills in the objects with color, so stroke colors the outside and fill colors the inside of the object
function fill(color: string) {
    canvas_context.fillStyle = color;
    canvas_context.fill();
}

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// returns the distance between two points

function dist(x1: number, y1: number, x2: number, y2: number): number {
    let diff_x: number = x1 - x2;
    let diff_y: number = y1 - y2;

    let distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

    return distance;
}