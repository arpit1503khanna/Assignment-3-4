
export function editRow(no: number) {
    let currentRow = document.getElementById("row" + no)!;
    currentRow.style.background = "yellow";

    //SHOW SAVE & CANCEL BUTTON
    let saveButton = document.getElementById("saveButtonRow" + no)!;
    let cancelButton = document.getElementById("cancelButtonRow" + no)!;
    let headerSave = document.getElementById("headerSave")!;
    let headerCancel = document.getElementById("headerCancel")!;


    saveButton.style.display = "";
    cancelButton.style.display = "";
    headerSave.style.display = "";
    headerCancel.style.display = "";

    //MAKE ROW EDITABLE 

    let rowId = document.getElementById("row" + no + "Id")!;
    let rowFname = document.getElementById("row" + no + "Fname")!;
    let rowMname = document.getElementById("row" + no + "Mname")!;
    let rowLname = document.getElementById("row" + no + "Lname")!;
    let rowEmail = document.getElementById("row" + no + "Email")!;
    let rowPhone = document.getElementById("row" + no + "Phone")!;
    let rowRole = document.getElementById("row" + no + "Role")!;
    let rowAddress = document.getElementById("row" + no + "Address")!;

    rowId.setAttribute("contenteditable", "true");
    rowFname.setAttribute("contenteditable", "true");
    rowMname.setAttribute("contenteditable", "true");
    rowLname.setAttribute("contenteditable", "true");
    rowEmail.setAttribute("contenteditable", "true");
    rowPhone.setAttribute("contenteditable", "true");
    rowRole.setAttribute("contenteditable", "true");
    rowAddress.setAttribute("contenteditable", "true");
}
