
import { users } from "./user";
import { populateFromJson } from "./populateFromJson";
import { saveRow } from "./saveRow";
import { cancelRow } from "./cancelRow";
import { createHeader } from "./createHeader";
import { editRow } from "./editRow";
function showTable() //function specific to type of object
{

    var table: HTMLTableElement = <HTMLTableElement>document.createElement("table"); // TS knows that only a generic html element is returned by createElement, hence we need to specify
    table.className = 'table table-hover';

    // EXTRACT VALUE FOR HTML HEADER. 
    let tr = table.insertRow(-1);
    let headerElements = ["ID", "First Name", "Middle Name", "Last Name", "Email", "Phone Number", "Role", "Address"];
    createHeader(headerElements,tr);

    //populate from json file

    for (let i = 0; i < users.items.length; i++) {

        tr = table.insertRow(-1);

        tr.id = "row" + (i);

        //Fill the the data from JSON data row wise
        populateFromJson(tr,i);

        //BUTTONS ON EACH ROW

        //EDIT
        let cellForEditButton = tr.insertCell(-1);
        let editButton = document.createElement('button');
        editButton.type =   'button';
        editButton.innerHTML = 'Edit';
        cellForEditButton.appendChild(editButton);
        editButton.addEventListener('click', function () { editRow(i) });

        //DELETE
        let cellForDeleteButton = tr.insertCell(-1);
        let deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = 'Delete';
        cellForDeleteButton.appendChild(deleteButton);
        deleteButton.addEventListener('click', function () { users.delete(i); });

        //SAVE
        let cellForSaveButton = tr.insertCell(-1);
        let saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.innerHTML = 'Save';
        cellForSaveButton.id = 'saveButtonRow' + i;
        cellForSaveButton.appendChild(saveButton);
        saveButton.addEventListener('click', function () {saveRow(i); });

        //CANCEL
        var cellForCancelButton = tr.insertCell(-1);
        var cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.innerHTML = 'Cancel';
        cellForCancelButton.id = 'cancelButtonRow' + (i);
        cellForCancelButton.appendChild(cancelButton);       
        cancelButton.addEventListener('click', function () { cancelRow(i); });


    }

    var divContainer = document.getElementById("showData")!;
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    let loadButton = <HTMLButtonElement>document.getElementById("showDataButton")!;
    loadButton.value = "Refresh";
}

    function main() { 
    showTable();
}



