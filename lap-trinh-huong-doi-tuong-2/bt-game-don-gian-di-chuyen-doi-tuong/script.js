function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
    }
    this.moveLeft = function () {
        this.left -= this.speed;
    }
    this.moveDown = function () {
        this.top += this.speed;
    }
    this.moveUp = function () {
        this.top -= this.speed;
    }

}

let hero = new Hero('images.png', 20, 30, 200, 10);
let marginLeft = hero.left;


function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top <= marginLeft) {
        hero.moveRight();
    } else if ((hero.top < window.innerHeight - hero.size) && (hero.left >= window.innerWidth - hero.size)) {
        hero.moveDown();
    } else if (hero.left > 0) {
        hero.moveLeft();
    } else if (hero.top > 0) {
        hero.moveUp();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50);
}

start();