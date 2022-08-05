import { users } from "./user";
export function populateFromJson(tr: HTMLTableRowElement,i:number){
    let cell1 = tr.insertCell(-1);
    let id = users.items[i].id;
    cell1.innerHTML = id;
    cell1.id = "row" + (i) + "Id";

    let cell2 = tr.insertCell(-1);
    let fname = users.items[i].firstName;
    cell2.innerHTML = fname;
    cell2.id = "row" + (i) + "Fname";


    let cell3 = tr.insertCell(-1);
    let mname = users.items[i].middleName;;
    cell3.innerHTML = mname;
    cell3.id = "row" + (i) + "Mname";

    let cell4 = tr.insertCell(-1);
    let lname = users.items[i].lastName;
    cell4.innerHTML = lname;
    cell4.id = "row" + (i) + "Lname";

    let cell5 = tr.insertCell(-1);
    let email = users.items[i].email;
    cell5.innerHTML = email;
    cell5.id = "row" + (i) + "Email";

    let cell6 = tr.insertCell(-1);
    let phone = users.items[i].phoneNumber;
    cell6.innerHTML = phone;
    cell6.id = "row" + (i) + "Phone";

    let cell7 = tr.insertCell(-1);
    let role = users.items[i].role;
    cell7.innerHTML = role;
    cell7.id = "row" + (i) + "Role";

    let cell8 = tr.insertCell(-1);
    let add = users.items[i].address;
    cell8.innerHTML = add;
    cell8.id = "row" + (i) + "Address";

    cell1.className = "editable";
    cell2.className = "editable";
    cell3.className = "editable";
    cell4.className = "editable";
    cell5.className = "editable";
    cell6.className = "editable";
    cell7.className = "editable";
    cell8.className = "editable";
}