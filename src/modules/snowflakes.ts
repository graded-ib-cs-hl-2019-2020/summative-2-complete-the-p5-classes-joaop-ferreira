export class Snowflake {
    private x: number;
    private y: number;
    private size: number;
    private color: string = "white";
    private stopped: boolean = false;
    private ySpeed: number = 1;
    private xSpeed: number = random(-1, 1);

    private gravity: number = 0;

    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward. I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */
    constructor(x: number, y: number, size: number, color: string) {

        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }
    public set_gravity(gravity_value: number) {
        this.gravity = gravity_value
    }
    public move(): void {
        if (this.stopped == false) {

            this.x = this.x + this.xSpeed;
            this.y = this.y + this.ySpeed - this.gravity;
        }
        this.doBorderBehavior();

    }

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);

    }

    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }

        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2
        }

        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }

        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}

