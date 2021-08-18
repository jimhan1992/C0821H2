function diem_trung_binh() {
    let toan = +document.getElementById('diem_toan').value;
    let ly = +document.getElementById('diem_ly').value;
    let hoa = +document.getElementById('diem_hoa').value;
    let tb = (toan + ly + hoa) / 3;
    if (tb > 8) {
        // dk dunng
        document.getElementById('result').innerHTML = "Hoc sinh dat";
    } else {
        // dk sai
        document.getElementById('result').innerHTML = "Khong dat";
    }
}