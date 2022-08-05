"use strict";
exports.__esModule = true;
exports.createHeader = void 0;
function createHeader(headerElements, tr) {
    for (var i = 0; i < headerElements.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = headerElements[i];
        tr.appendChild(th);
    }
    var thEdit = document.createElement("th"); // TABLE HEADER.
    thEdit.innerHTML = "Edit";
    tr.appendChild(thEdit);
    var thDelete = document.createElement("th"); // TABLE HEADER.
    thDelete.innerHTML = "Delete";
    tr.appendChild(thDelete);
    var thSave = document.createElement("th"); // TABLE HEADER. 
    thSave.innerHTML = "Save";
    tr.appendChild(thSave);
    var thCancel = document.createElement("th"); // TABLE HEADER. 
    thCancel.innerHTML = "Cancel";
    tr.appendChild(thCancel);
    thSave.style.display = "none";
    thCancel.style.display = "none";
    thSave.id = "headerSave";
    thCancel.id = "headerCancel";
}
exports.createHeader = createHeader;
