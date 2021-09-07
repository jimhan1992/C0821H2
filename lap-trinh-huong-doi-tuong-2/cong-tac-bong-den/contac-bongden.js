class ElectricLamp {
    constructor() {
        this.status = false;
    }

    turnOn() {
        if (this.status) {
            document.getElementById('result').innerHTML = 'den dang sang';
        } else {
            document.getElementById('result').innerHTML = 'den da bat';
            this.status = true;
        }
    }

    turnOff() {
        if (this.status) {
            document.getElementById('result').innerHTML = 'den da duoc tat';
            this.status = false;
        } else {
            document.getElementById('result').innerHTML = 'den da bat';
            this.status = true;
        }
    }
}


class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = '';
    }

    connectToLamp(ElectricLamp) {
        document.getElementById('result').innerHTML = 'da ket noi';
        this.lamp = ElectricLamp;
    }

    switchOff() {
        if (this.lamp === "") {
            document.getElementById('result').innerHTML = 'chua ket noi';
        } else {
            this.status = false;
            this.lamp.turnOff();
        }
    }

    switchOn() {
        if (this.lamp === "") {
            document.getElementById('result').innerHTML = 'chua ket noi';
        } else {
            this.status = true;
            this.lamp.turnOn();
        }
    }
}

let lamp = new ElectricLamp();
let ct = new SwitchButton();
