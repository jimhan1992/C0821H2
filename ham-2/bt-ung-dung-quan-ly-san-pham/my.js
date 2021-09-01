let productList = ["Sonny Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 6", "Apple iPhone 6s", "Nokia 7"];

function showAllProduct() {
    let content = "";
    for (let i = 0; i < productList.length; i++) {
        content += '<tr>\n' +
            '            <td>' + productList[i] + '</td>\n' +
            '            <td><button onclick="editProduct(' + i + ')">Edit</button></td>\n' +
            '            <td><button onclick="deleteProduct(' + i + ')">Delete</button></td>\n' +
            '        </tr>'
    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("total").innerText = productList.length + " product";
}

showAllProduct();

function addNewProduct() {
    let newP = document.getElementById("newP").value;
    productList.push(newP);
    showAllProduct();
    document.getElementById("newP").value = "";
}

function deleteProduct(index) {
    productList.splice(index, 1);
    showAllProduct();
}

function editProduct(index){
    let newValue = prompt("Moi ban nhap vao ten moi", productList[index]);
    productList[index] = newValue;
    showAllProduct();
}
