
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

//gives a background to the canvas
function background(color: string) {

    canvas_context.globalCompositeOperation = 'destination-over';
    canvas_context.fillStyle = color;
    canvas_context.fillRect(0, 0, canvas.width, canvas.height);
    canvas_context.globalCompositeOperation = 'source-over'

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
// draws the lines to create the snowflake
function line(origin_x: number, origin_y: number, end_x: number, end_y: number) {

    canvas_context.moveTo(origin_x, origin_y);
    canvas_context.lineTo(end_x, end_y)
    canvas_context.stroke();

}


function random(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

// returns the distance between two points

function dist(px1: number, py1: number, px2: number, py2: number): number {
    let diff_x: number = px1 - px2;
    let diff_y: number = py1 - py2;

    let distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

    return distance;
}

// Wind and Gravity simulation

// Gets the range element to control the wind
let wind_range = document.getElementById("range_wind") as HTMLInputElement;
let wind_label = document.getElementById("wind_value");
