export class Snowflake {
    constructor(x, y, size, color) {
        this.color = "white";
        this.stopped = false;
        this.ySpeed = 1;
        this.xSpeed = random(-1, 1);
        this.gravity = 0;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    set_gravity(gravity_value) {
        this.gravity = gravity_value;
    }
    move() {
        if (this.stopped == false) {
            this.x = this.x + this.xSpeed;
            this.y = this.y + this.ySpeed - this.gravity;
        }
        this.doBorderBehavior();
    }
    draw() {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=snowflakes.js.map