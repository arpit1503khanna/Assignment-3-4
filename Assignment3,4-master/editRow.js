"use strict";
exports.__esModule = true;
exports.editRow = void 0;
function editRow(no) {
    var currentRow = document.getElementById("row" + no);
    currentRow.style.background = "yellow";
    //SHOW SAVE & CANCEL BUTTON
    var saveButton = document.getElementById("saveButtonRow" + no);
    var cancelButton = document.getElementById("cancelButtonRow" + no);
    var headerSave = document.getElementById("headerSave");
    var headerCancel = document.getElementById("headerCancel");
    saveButton.style.display = "";
    cancelButton.style.display = "";
    headerSave.style.display = "";
    headerCancel.style.display = "";
    //MAKE ROW EDITABLE 
    var rowId = document.getElementById("row" + no + "Id");
    var rowFname = document.getElementById("row" + no + "Fname");
    var rowMname = document.getElementById("row" + no + "Mname");
    var rowLname = document.getElementById("row" + no + "Lname");
    var rowEmail = document.getElementById("row" + no + "Email");
    var rowPhone = document.getElementById("row" + no + "Phone");
    var rowRole = document.getElementById("row" + no + "Role");
    var rowAddress = document.getElementById("row" + no + "Address");
    rowId.setAttribute("contenteditable", "true");
    rowFname.setAttribute("contenteditable", "true");
    rowMname.setAttribute("contenteditable", "true");
    rowLname.setAttribute("contenteditable", "true");
    rowEmail.setAttribute("contenteditable", "true");
    rowPhone.setAttribute("contenteditable", "true");
    rowRole.setAttribute("contenteditable", "true");
    rowAddress.setAttribute("contenteditable", "true");
}
exports.editRow = editRow;
