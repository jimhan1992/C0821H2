let images = [
    "images/1-b.png",
    "images/2-b.png",
    "images/3-c.png",
    "images/4-c.png",
    "images/5-a.png",
    "images/6-c.png",
    "images/7-d.png",
    "images/8-a.png",
    "images/9-a-b.png",
    "images/10-b.png",
    "images/11-a.png",
    "images/12-a.png",
    "images/13-a.png",
    "images/14-b.png",
    "images/15a-c-d.png",
    "images/16-a.png",
    "images/17-c.png",
    "images/18-c.png",
    "images/19-d.png",
    "images/20-a-b.png",
    "images/21-c.png",
    "images/22-b.png",
    "images/23-b.png",
    "images/24-c.png",
    "images/25-d.png",
    "images/26-d.png",
    "images/27-a.png",
    "images/28-d.png",
    "images/29-a-b-d.png",
    "images/30-c.png",
    "images/31-b.png",
    "images/32-c.png",
    "images/33-a.png",


];

let answers = ["b", "b", "c", "c", "a", "c", "d", "a", "a,b", "b", "a", "a", "a", "b", "a,c,d", "a", "c", "c", "d", "a,b", "c", "b", "b", "c", "d", "d", "a", "d", "a,b,d", "c", "b", "c", "a",];

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