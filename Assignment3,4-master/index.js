"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var populateFromJson_1 = require("./populateFromJson");
var saveRow_1 = require("./saveRow");
var cancelRow_1 = require("./cancelRow");
var createHeader_1 = require("./createHeader");
var editRow_1 = require("./editRow");
function showTable() {
    var table = document.createElement("table"); // TS knows that only a generic html element is returned by createElement, hence we need to specify
    table.className = 'table table-hover';
    // EXTRACT VALUE FOR HTML HEADER. 
    var tr = table.insertRow(-1);
    var headerElements = ["ID", "First Name", "Middle Name", "Last Name", "Email", "Phone Number", "Role", "Address"];
    (0, createHeader_1.createHeader)(headerElements, tr);
    var _loop_1 = function (i) {
        tr = table.insertRow(-1);
        tr.id = "row" + (i);
        //Fill the the data from JSON data row wise
        (0, populateFromJson_1.populateFromJson)(tr, i);
        //BUTTONS ON EACH ROW
        //EDIT
        var cellForEditButton = tr.insertCell(-1);
        var editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.innerHTML = 'Edit';
        cellForEditButton.appendChild(editButton);
        editButton.addEventListener('click', function () { (0, editRow_1.editRow)(i); });
        //DELETE
        var cellForDeleteButton = tr.insertCell(-1);
        var deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = 'Delete';
        cellForDeleteButton.appendChild(deleteButton);
        deleteButton.addEventListener('click', function () { user_1.users["delete"](i); });
        //SAVE
        var cellForSaveButton = tr.insertCell(-1);
        var saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.innerHTML = 'Save';
        cellForSaveButton.id = 'saveButtonRow' + i;
        cellForSaveButton.appendChild(saveButton);
        saveButton.addEventListener('click', function () { (0, saveRow_1.saveRow)(i); });
        //CANCEL
        cellForCancelButton = tr.insertCell(-1);
        cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.innerHTML = 'Cancel';
        cellForCancelButton.id = 'cancelButtonRow' + (i);
        cellForCancelButton.appendChild(cancelButton);
        cancelButton.addEventListener('click', function () { (0, cancelRow_1.cancelRow)(i); });
    };
    var cellForCancelButton, cancelButton;
    //populate from json file
    for (var i = 0; i < user_1.users.items.length; i++) {
        _loop_1(i);
    }
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    var loadButton = document.getElementById("showDataButton");
    loadButton.value = "Refresh";
}
function main() {
    showTable();
}
