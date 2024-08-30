var selectedRow = null;
function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
        console.log("1111");

    } else {
        console.log("2222");
        updateRecord(formData);
    }
}
// retrieve the data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["productName"] = document.getElementById("productName").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

// insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0]

    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick='onEdit(this)'>edit</button><button onClick='onDelete(this)'>delete</button>`

}

// Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

// update
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.productName;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.price;

}

// Detete the dta
function onDelete(td) {
    if (confirm('Do you want to delete the record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm()
}

// reset the data
function resetForm() {
    document.getElementById('productCode').value = "";
    document.getElementById('productName').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('price').value = "";
}