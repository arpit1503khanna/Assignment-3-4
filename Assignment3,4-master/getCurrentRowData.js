"use strict";
exports.__esModule = true;
exports.getCurrentRowData = void 0;
var Role;
(function (Role) {
    Role[Role["SUPERADMIN"] = 0] = "SUPERADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUBSCRIBER"] = 2] = "SUBSCRIBER";
})(Role || (Role = {}));
;
function getCurrentRowData(no) {
    var rowId = document.getElementById("row" + no + "Id").innerHTML;
    var rowFname = document.getElementById("row" + no + "Fname").innerHTML;
    var rowMname = document.getElementById("row" + no + "Mname").innerHTML;
    var rowLname = document.getElementById("row" + no + "Lname").innerHTML;
    var rowEmail = document.getElementById("row" + no + "Email").innerHTML;
    var rowPhone = document.getElementById("row" + no + "Phone").innerHTML;
    var rowRole = document.getElementById("row" + no + "Role").innerHTML;
    var rowAddress = document.getElementById("row" + no + "Address").innerHTML;
    var r = -1;
    if (rowRole.toLowerCase() === "superadmin")
        r = 0;
    else if (rowRole.toLowerCase() === "admin")
        r = 1;
    else
        r = 2;
    var obj = {
        id: rowId,
        firstName: rowFname,
        middleName: rowMname,
        lastName: rowLname,
        email: rowEmail,
        phoneNumber: rowPhone,
        role: r,
        address: rowAddress
    };
    return obj;
}
exports.getCurrentRowData = getCurrentRowData;
