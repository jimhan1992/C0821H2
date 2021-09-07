class Rat {
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
        this.status = true;
    }

    sound(text) {
        alert("chit chit");
    }
}

class Cat {
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.maxSpeed = _speed;
    }

    sound(text) {
        alert("meo meo");
    }

    catch(rat) {
        if (this.maxSpeed >= rat.speed) {
            if (rat.status) {
                alert("meo " + this.name + " da bat dc chuot " + rat.name);
            } else {
                alert('chuot da chet')
            }
        } else
            alert('chuot chay nhanh qua')
    }

    eat(rat) {
        if (rat.status) {
            alert("meo " + this.name + " da an chuot " + rat.name);
        } else alert(rat.name + " da chet");
        rat.status = false;
        this.weight = this.weight + rat.weight;
    }
}

let meo = new Cat("Tom", 50, 100);
let rat = new Rat("Micky", 10, 30);
document.getElementById('_name').innerHTML = meo.name

function tom_catch() {
    meo.catch(rat);
}

function tom_eat() {
    meo.eat(rat);
}