
export class Bubble {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-3, 3);
    private ySpeed: number = random(-3, 3);
    private stopped: boolean = false;
    private color: string = "cyan";
    private borderColor: string = "yellow";

    // function creates object of the class "Bubble"
    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    /* TODO REQUIRED - What's missing here? Add it! */

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }
    // Draws the bubbles with the given colors and dimensions
    public draw(): void {
        ellipse(this.x, this.y, this.size);
        fill(this.color);
        stroke(this.borderColor);

    }

    public move(): void {
        if (this.stopped == false) {
            this.y = this.y - this.ySpeed;
            this.doBorderBehavior();

            /* TODO REQUIRED - Make the bubbles move as long as they aren't stopped. Model after ball behavior. */
            /* The doBorderBehavior is built in for you below. */
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}

