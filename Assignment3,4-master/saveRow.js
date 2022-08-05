"use strict";
exports.__esModule = true;
exports.saveRow = void 0;
var user_1 = require("./user");
var getCurrentRowData_1 = require("./getCurrentRowData");
function saveRow(i) {
    var updatedRowObject = (0, getCurrentRowData_1.getCurrentRowData)(i);
    user_1.users.update(i, updatedRowObject);
    var saveButton = document.getElementById("saveButtonRow" + i);
    var cancelButton = document.getElementById("cancelButtonRow" + i);
    var headerSave = document.getElementById("headerSave");
    var headerCancel = document.getElementById("headerCancel");
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    headerSave.style.display = "none";
    headerCancel.style.display = "none";
}
exports.saveRow = saveRow;
