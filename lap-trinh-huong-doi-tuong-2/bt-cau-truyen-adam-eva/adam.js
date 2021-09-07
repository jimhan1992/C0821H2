class Apple {
    constructor(weight = 10) {
        this.weight = weight;
    }

    decrease() {
        return this.weight;
    }
    isEmpty(){
        return this.weight--;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender;
    }

    setGender(gender) {
        return this.gender = gender;
    }

    checkApple(apple) {
        console.log(apple.weight)
    }

    eat(apple) {
        if (apple.weight > 0) {
            console.log('ban da an');
            this.weight++;
            apple.weight--;
        } else {
            alert('da an het')
        }
    }

    say(string) {
        console.log(string)
    }

    getName() {
        return "name: " + this.name + "gender: " + this.gender + "weight: " + this.weight;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}

let han = new Human("han", "male", 60);
let hiu = new Human("hiu", "male", 55);
let apple = new Apple(50);