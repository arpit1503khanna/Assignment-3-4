import { users } from "./user";
import { getCurrentRowData } from "./getCurrentRowData";
export function saveRow(i : number){
    let updatedRowObject = getCurrentRowData(i);
    users.update(i, updatedRowObject);

    let saveButton = document.getElementById("saveButtonRow" + i)!;
    let cancelButton = document.getElementById("cancelButtonRow" + i)!;
    let headerSave = document.getElementById("headerSave")!;
    let headerCancel = document.getElementById("headerCancel")!;

    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    headerSave.style.display = "none";
    headerCancel.style.display = "none";
}