class Hero {
    constructor(img, top, left, width, height, speed, direction) {
        this.img = img;
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction;
    }

    getHero() {
        return `<img src="${this.img}" alt="Hero" width="${this.width}px" height= ${this.height}px style="top:${this.top}px; left:${this.left}px; position:absolute;">`;
    }

    moveLeft() {
        this.left -= this.speed;
    }

    moveRight() {
        this.left += this.speed;
    }

    moveTop() {
        this.top -= this.speed;
    }

    moveBottom() {
        this.top += this.speed;
    }

    changeDirection(direction) {
        this.direction = direction;
    }

    draw() {
        document.getElementById("game").innerHTML = this.getHero();
    }
}

const LEFT = 37;
const RIGHT = 39;
const TOP = 38;
const BOTTOM = 40;
const STOP = 32;
let action = [LEFT, RIGHT, TOP, BOTTOM, STOP];

let pikachu = new Hero("pika.gif", 0, 0, 100, 110, 3, RIGHT);

const move = direction => {
    switch (direction) {
        case LEFT:
            pikachu.moveLeft();
            break;
        case RIGHT:
            pikachu.moveRight();
            break;
        case TOP:
            pikachu.moveTop();
            break;
        case BOTTOM:
            pikachu.moveBottom();
            break;
        case STOP:
            pikachu.stop();
            break;
    }
};

const run = function() {
    idAnimation = requestAnimationFrame(run);
    pikachu.draw();
    move(pikachu.direction);
};

const start = keyCode => {
    requestAnimationFrame(run);
};

const stop = keyCode => {
    cancelAnimationFrame(idAnimation);
};

let idAnimation = requestAnimationFrame(run);

document.addEventListener("keydown", e => {
    let isKeyCode = action.indexOf(e.keyCode);
    if (isKeyCode !== -1) {
        if (pikachu.direction === STOP && e.keyCode > STOP) {
            start();
        } else if (e.keyCode === STOP) {
            stop();
        }
        pikachu.changeDirection(e.keyCode);
    }
});
