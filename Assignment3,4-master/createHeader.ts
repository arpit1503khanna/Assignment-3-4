export function createHeader(headerElements:Array<string>,tr:HTMLTableRowElement){
    for (let i = 0; i < headerElements.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = headerElements[i];
        tr.appendChild(th);
    }
    let thEdit = document.createElement("th");      // TABLE HEADER.
    thEdit.innerHTML = "Edit";
    tr.appendChild(thEdit);
    let thDelete = document.createElement("th");      // TABLE HEADER.
    thDelete.innerHTML = "Delete";
    tr.appendChild(thDelete);
    let thSave = document.createElement("th");      // TABLE HEADER. 
    thSave.innerHTML = "Save";
    tr.appendChild(thSave);
    let thCancel = document.createElement("th");      // TABLE HEADER. 
    thCancel.innerHTML = "Cancel";
    tr.appendChild(thCancel);


    thSave.style.display = "none";
    thCancel.style.display = "none";
    thSave.id = "headerSave";
    thCancel.id = "headerCancel";
}