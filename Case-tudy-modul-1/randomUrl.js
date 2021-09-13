function ranUrl() {
    let urls = [];
    urls[0] = "bien-kieu-du-lieu-toa-tu/index.html";
    urls[1] = "cau-lenh-dieu-kien/index.html";
    urls[2] = "cau-truc-lap/index.html";
    urls[4] = "form-table/index.html";
    urls[5] = "git-html/index.html";
    urls[6] = "ham/index.html";
    urls[7] = "lt-huong-doi-tuong1/index.html";
    urls[8] = "lt-huong-doi-tuong2/index.html";
    urls[9] = "mang/index.html";
    urls[10] = "pseudo-code-flowchart/index.html";
    urls[11] = "tq-javascrip/index.html";
    let random = Math.floor(Math.random() * urls.length);
    window.location = urls[random];
}
