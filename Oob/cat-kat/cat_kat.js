class Mouse {
    constructor (name, weight, speed, status = true) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }

    speak () {
        console.log('Chít Chít');
    }
}

class Cat {
    constructor (name, weight, speedMax) {
        this.name = name;
        this.weight = weight;
        this.speedMax = speedMax;
    }

    speak () {
        console.log('Meo Meo');
    }

    cath (mouse) {
        return this.speedMax > mouse.speed;
    }

    eat (mouse) {
        if (mouse.status && this.cath(mouse)) {
            this.weight += mouse.weight;
            mouse.status = false;
        }
    }
}

const tom = new Cat('Tom', 2.5, 40);
console.log('🐧 tom ', tom);

const jerry1 = new Mouse('jerry1', 0.2, 60);
const jerry2 = new Mouse('jerry2', 0.22, 50);
const jerry3 = new Mouse('jerry3', 0.2, 30);
const jerry4 = new Mouse('jerry4', 0.21, 20);
const jerry5 = new Mouse('jerry5', 0.2, 30);
const jerry6 = new Mouse('jerry6', 0.2, 30, false);

tom.eat(jerry4);
console.log('🐧 tom ', tom);

tom.eat(jerry6);
console.log('🐧 tom ', tom);

tom.eat(jerry1);
console.log('🐧 tom ', tom);