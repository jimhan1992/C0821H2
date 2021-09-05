class Rat {
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
        this.status = true;
    }

    sound() {
        alert("chit chit");
    }
}



let chuot = new Rat("Micky", 10, 30);
let meo = new Cat("tom", 20, 50);
meo.catch(rat);
document.getElementById('_name').innerHTML = chuot.name;
