enum Role { SUPERADMIN, ADMIN, SUBSCRIBER };

import { users } from "./user";
export function cancelRow(no: number) {

    let row = 'row' + no;
    let currentRow = document.getElementById(row)!;
    currentRow.style.background = "white";
    //REVERT BACK TO ORIGINAL CONTENT


    let rowId = document.getElementById("row" + no + "Id")!;
    let rowFname = document.getElementById("row" + no + "Fname")!;
    let rowMname = document.getElementById("row" + no + "Mname")!;
    let rowLname = document.getElementById("row" + no + "Lname")!;
    let rowEmail = document.getElementById("row" + no + "Email")!;
    let rowPhone = document.getElementById("row" + no + "Phone")!;
    let rowRole = document.getElementById("row" + no + "Role")!;
    let rowAddress = document.getElementById("row" + no + "Address")!;

    rowId.innerHTML = users.items[no].id;
    rowFname.innerHTML = users.items[no].firstName;
    rowMname.innerHTML = users.items[no].middleName;
    rowLname.innerHTML = users.items[no].lastName;
    rowEmail.innerHTML = users.items[no].email;
    rowPhone.innerHTML = users.items[no].phoneNumber;
    rowRole.innerHTML = users.items[no].role;
    rowAddress.innerHTML = users.items[no].address;


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

    let saveButton = document.getElementById("saveButtonRow" + no)!;
    let cancelButton = document.getElementById("cancelButtonRow" + no)!;
    let headerSave = document.getElementById("headerSave")!;
    let headerCancel = document.getElementById("headerCancel")!;

    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    headerSave.style.display = "none";
    headerCancel.style.display = "none";

}