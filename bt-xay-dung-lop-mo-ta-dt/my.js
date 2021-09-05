class Mobile {

    constructor(_name) {
        this.name = _name;
        this.battery = 50;
        this.draft = "";
        this.inbox = [];
        this.outbox = [];
        this.status = true;
    }

    checkStatus() {
        return this.status;
    }

    onOff() {
        // dang tat -> bat
        //dang bat -> tat
        this.status = !this.status;
    }

    writting(text) {
        this.draft = text;
        this.battery--;
        if (this.battery === 0) {
            this.on = false
            alert('Xạc điện thoại vào Ok')
        }
    }

    //phone là 1 đối tượng, biến đối tượng là tham chiếu
    //truyền đối tượng vào trong phương thức
    sendMessage(phone) {
        //this: điện thoại hiện tại
        //phone: điện thoại gửi sang
        //1. chuyển tin nhắn nháp của this -> hộp thư đến của phone
        phone.inbox.push(this.draft);
        //2. chuyển tin nhắn nháp của this -> hộp thư đã gửi của this
        this.outbox.push(this.draft);
        //3. Xoá tin nhắn nháp.
        this.draft = "";
        this.battery--;
        if (this.battery === 0) {
            this.on = false
            alert('Xạc điện thoại vào Ok')
        }
    }

    getInbox() {
        this.battery--;
        if (this.battery === 0) {
            this.on = false
            alert('Xạc điện thoại vào Ok')
        }
        return this.inbox;
    }

    getOutbox() {
        if (this.status) {
            this.battery--;
            if (this.battery === 0) {
                this.on = false
                alert('Xạc điện thoại vào Ok')
            }
            return this.outbox;
        }
    }
}

let nokia = new Mobile("nokia");
let iphone = new Mobile("iphone");

function nokiaSenMessage() {
    //buoc 1: lấy dữ liệu
    let mess = document.getElementById("mess1").value;
    //gán vào thư nháp
    iphone.writting(mess);
    //gửi tin cho Trường
    iphone.sendMessage(nokia)
    //hien thi hop thu den cua truong
    let inboxNokia = nokia.inbox.join('-');
    document.getElementById("inbox2").innerText = inboxNokia;

}

function iPhoneSenMessage() {
    //buoc 1: lấy dữ liệu
    let mess = document.getElementById("mess2").value;
    //gán vào thư nháp
    nokia.writting(mess);
    //gửi tin cho Trường
    nokia.sendMessage(iphone)
    //hien thi hop thu den cua truong
    let inboxiphone = iphone.inbox.join('-');
    document.getElementById("inbox1").innerText = inboxiphone;

}