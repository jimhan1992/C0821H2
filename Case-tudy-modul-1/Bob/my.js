let images = [
    "images/1-7.png",
    "images/2-7.png",
    "images/3-c-4.png",
    "images/4-1-1-4-3.png",
    "images/5-0.png",
    "images/6-5-6.png",
    "images/7-11-11-11-11.png",
    "images/8-boom7boom6boom5.png",
    "images/9-50.png",
    "images/10-boom.png",

];

let answers = [
    "7",
    "7",
    "codegym,4",
    "1,1,4,3",
    "0",
    "5,6",
    "11,11,11,11",
    "boom7boom6boom5",
    "50",
    "boom",

];

class Image {
    constructor() {
        this.index = 0;
    }

    increaseIndex() {
        if (this.index >= 0 && this.index < images.length - 1) {
            this.index++;
        } else {
            this.index = 0;
        }
    }

    setImage(src) {
        this.image = src;
    }

    getImage() {
        return this.image;
    }

    changeImage() {
        this.increaseIndex();
        this.setImage(images[this.index]);
        document.getElementById("img").src = this.getImage();
    }
}

class Answer {
    constructor() {
        this.answer = document.getElementById("input").value;
    }

    setAnswer() {
        this.answer = document.getElementById("input").value;
    }

    check() {
        this.setAnswer();
        if (this.answer === answers[image.index]) {
            document.getElementById('amthanhdung').play()
            alert("Hoan hô! Bạn đã trả lời đúng");
            image.changeImage();
            point.increasePoint();
            point.getPoint();
            point.resetPoint();
            document.getElementById("input").value = null;
            if (image.index === 0) {
                document.getElementById('yeah').play()
                alert("Bạn đã làm rất tốt ^^!");
            }
        } else if (this.answer === "") {
            alert("Bạn chưa nhập câu trả lời!");
        } else {
            document.getElementById('amthanhsai').play()
            alert("Sai mất rồi! Tìm câu trả lời khác thôi.");
            document.getElementById("input").value = null;
        }
    }
}

class Point {
    constructor() {
        this.point = 0;
    }

    increasePoint() {
        this.point += 10;
    }

    getPoint() {
        return document.getElementById("point").innerHTML = "Điểm của bạn: " + this.point + "/" + images.length*10;
    }

    resetPoint() {
        if (image.index === 0) {
            this.point = 0;
            document.getElementById("point").innerHTML = "Điểm của bạn: ";
        }
    }
}

let image = new Image();
let answer = new Answer();
let point = new Point();