function getListLength(list) {
    if (localStorage.hasOwnProperty(list)) {
        return Object.keys(JSON.parse(localStorage.getItem(list))).length;
    } else {
        return 0;
    }
}

function populateTasksDropdown() {
    
    clearTasksDropdown();

    let tasksDropdown = document.getElementById("tasks-dropdown");

    // Returns the named entry in LocalStorage AS A STRING (text)
    const taskListInLocalStorage = window.localStorage.getItem("taskList");
    
    // Interprets ("parses") the string into OBJECTS
    let taskList = JSON.parse(taskListInLocalStorage);
    
    // If there was nothing in LocalStorage, we replace the productList with an empty list
    if (taskList == undefined) {
        taskList = [];
    }
    
    // Create an empty value
    let emptyEl = document.createElement("option");
    emptyEl.textContent = "ingen";
    emptyEl.value = -1;
    tasksDropdown.appendChild(emptyEl);

    for (let i = 0; i < taskList.length; i++) {
        let el = document.createElement("option");
        el.textContent = taskList[i].name;
        el.value = taskList[i].id;
        tasksDropdown.appendChild(el);
    }
}

function clearTasksDropdown() {
    let el = document.getElementById("tasks-dropdown");
    let i, L = el.options.length - 1;;
    for (i = L; i >= 0; i--) {
        el.remove(i);
    }
}