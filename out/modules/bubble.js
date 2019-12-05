export class Bubble {
    constructor(x, y, size, color = "#FFFFFF80", borderColor) {
        this.xSpeed = random(-1, 1);
        this.ySpeed = random(-3, -1);
        this.stopped = false;
        this.color = "#FFFFFF80";
        this.borderColor = "white";
        this.wind = 0;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    set_wind(windValue) {
        this.wind = windValue;
    }
    move() {
        if (this.stopped == false) {
            this.x = this.x + this.xSpeed + this.wind;
            this.y = this.y + this.ySpeed;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    doBorderBehavior() {
        if (this.size > 0 && this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.size > 0 && this.x > width + this.size) {
            this.x = -this.size / 2;
        }
        if (this.size > 0 && this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.size > 0 && this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=bubble.js.map