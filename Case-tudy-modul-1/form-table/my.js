let images = [
    "images/1-d.png",
    "images/2-b.png",
    "images/3-d.png",
    "images/4-c.png",
    "images/5-a-b-c.png",
    "images/6-a.png",
    "images/7-a-b.png",
    "images/8-c.png",
    "images/9-a-b.png",
    "images/10-c.png",
    "images/11-a-c-d.png",
    "images/12-a.png",
    "images/13-a-b.png",
    "images/14-a.png",
    "images/15-b.png",
    "images/16-c.png",
    "images/17-d.png",


];

let answers = ["d", "b", "d", "c", "a,b,c", "a", "a,b", "c", "a,b", "c", "a,c,d", "a", "a,b", "a", "b", "c", "d",];

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