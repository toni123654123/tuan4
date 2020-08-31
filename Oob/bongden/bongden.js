class SwitchButton {
    constructor(status = false, lamp) {
        this.status = status;
        this.lamp = lamp;
    }

    connectToLamp(electricLamp) {
        this.lamp = electricLamp;
    }

    switchOff() {
        if (this.status) {
            this.status = false;
            this.lamp.turnOff();

        }
    }

    switchOn() {
        if (!this.status) {
            this.status = true;
            this.lamp.turnOn();

        }
    }
}

class ElectricLamp {
    constructor(status = false) {
        this.status = status;
    }

    turnOff() {
        this.status = false;
    }

    turnOn() {
        this.status = true;
    }
}

let lamp = new ElectricLamp();
let switchButton = new SwitchButton(false, lamp);

const setLamp = status => {
    return `<img src="image/${status}.jpg" alt="lamp" style="width: 300px; height:300px">`;
};

const update = () => {
    let temp = switchButton.status ? "off" : "on";
    document.getElementById("lamp").innerHTML = setLamp(temp);
    temp === "off" ? switchButton.switchOff() : switchButton.switchOn();
};

let i = 0;
let interval = setInterval(() => {
    document.getElementById("clickButton").click();
    i++;
    if (i === 10) {
        clearInterval(interval);
    }
}, 1000);