let canvas: HTMLCanvasElement;
let canvas_context: CanvasRenderingContext2D;

let width: number;
let height: number;

function createCanvas(width: number, height: number) {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');

    canvas.width = width;
    canvas.height = height;

    width = width;
    height = height;

    canvas_context = <CanvasRenderingContext2D>canvas.getContext("2d");
}