enum Role { SUPERADMIN, ADMIN, SUBSCRIBER };

interface User {

    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: Role;
    address: string;

}

export function getCurrentRowData(no: number) {


    let rowId = document.getElementById("row" + no + "Id")!.innerHTML;
    let rowFname = document.getElementById("row" + no + "Fname")!.innerHTML;
    let rowMname = document.getElementById("row" + no + "Mname")!.innerHTML;
    let rowLname = document.getElementById("row" + no + "Lname")!.innerHTML;
    let rowEmail = document.getElementById("row" + no + "Email")!.innerHTML;
    let rowPhone = document.getElementById("row" + no + "Phone")!.innerHTML;
    let rowRole = document.getElementById("row" + no + "Role")!.innerHTML;
    let rowAddress = document.getElementById("row" + no + "Address")!.innerHTML;
    let r = -1;
    if (rowRole.toLowerCase() === "superadmin")
        r = 0;
    else if (rowRole.toLowerCase() === "admin")
        r = 1;
    else
        r = 2;

    let obj: User = {
        id: rowId,
        firstName: rowFname,
        middleName: rowMname,
        lastName: rowLname,
        email: rowEmail,
        phoneNumber: rowPhone,
        role: r,
        address: rowAddress

    }

    return obj;
}