"use strict";
exports.__esModule = true;
exports.cancelRow = void 0;
var Role;
(function (Role) {
    Role[Role["SUPERADMIN"] = 0] = "SUPERADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUBSCRIBER"] = 2] = "SUBSCRIBER";
})(Role || (Role = {}));
;
var user_1 = require("./user");
function cancelRow(no) {
    var row = 'row' + no;
    var currentRow = document.getElementById(row);
    currentRow.style.background = "white";
    //REVERT BACK TO ORIGINAL CONTENT
    var rowId = document.getElementById("row" + no + "Id");
    var rowFname = document.getElementById("row" + no + "Fname");
    var rowMname = document.getElementById("row" + no + "Mname");
    var rowLname = document.getElementById("row" + no + "Lname");
    var rowEmail = document.getElementById("row" + no + "Email");
    var rowPhone = document.getElementById("row" + no + "Phone");
    var rowRole = document.getElementById("row" + no + "Role");
    var rowAddress = document.getElementById("row" + no + "Address");
    rowId.innerHTML = user_1.users.items[no].id;
    rowFname.innerHTML = user_1.users.items[no].firstName;
    rowMname.innerHTML = user_1.users.items[no].middleName;
    rowLname.innerHTML = user_1.users.items[no].lastName;
    rowEmail.innerHTML = user_1.users.items[no].email;
    rowPhone.innerHTML = user_1.users.items[no].phoneNumber;
    rowRole.innerHTML = user_1.users.items[no].role;
    rowAddress.innerHTML = user_1.users.items[no].address;
    //MAKE ROWS NON EDITABLE
    rowId.setAttribute("contenteditable", "false");
    rowFname.setAttribute("contenteditable", "false");
    rowMname.setAttribute("contenteditable", "false");
    rowLname.setAttribute("contenteditable", "false");
    rowEmail.setAttribute("contenteditable", "false");
    rowPhone.setAttribute("contenteditable", "false");
    rowRole.setAttribute("contenteditable", "false");
    rowAddress.setAttribute("contenteditable", "false");
    //HIDE SAVE AND DELETE COLUMNS
    var saveButton = document.getElementById("saveButtonRow" + no);
    var cancelButton = document.getElementById("cancelButtonRow" + no);
    var headerSave = document.getElementById("headerSave");
    var headerCancel = document.getElementById("headerCancel");
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    headerSave.style.display = "none";
    headerCancel.style.display = "none";
}
exports.cancelRow = cancelRow;
