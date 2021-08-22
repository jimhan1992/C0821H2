function xeploai() {
    var giuaky =document.getElementById('giuaky');
    var cuoiky =document.getElementById('cuoiky');
    var tb = (giuaky + cuoiky) / 2;
    if (tb >= 8 && tb <= 10) {
        document.getElementById('result').innerHTML = "Giỏi";
    } else if (tb >= 6.5) {
        document.getElementById('result').innerHTML = "Khá";
    } else if (tb >= 5) {
        document.getElementById('result').innerHTML = "Trung Bình";
    } else {
        document.getElementById('result').innerHTML = "Yếu";
    }
}
