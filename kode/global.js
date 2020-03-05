function getUniqueListId(listName) {

    const list = JSON.parse(window.localStorage.getItem(listName));
    
    if (list == undefined) {
        return 0;
    }
    
    let usedIds = [];
    for (const entry of list) {
        console.log("usedIds["+entry.id+"] = true");
        usedIds[entry.id] = true;
    }
    
    let id = 0;
    do {
    } while (usedIds[++id] == true);

    return id;
}

function clearFeedbacks() {
    document.getElementById("task-name-feedback-div").innerHTML = "";
    document.getElementById("task-submit-feedback-div").innerHTML = "";
    document.getElementById("member-name-feedback-div").innerHTML = "";
    document.getElementById("member-submit-feedback-div").innerHTML = "";
}

function clearOutputs() {
    document.getElementById("output-div1").innerHTML = "";
    document.getElementById("output-div2").innerHTML = "";
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
    
    // Populate dropdown box with available tasks from taskList
    for (let i = 0; i < taskList.length; i++) {
        
        // Only tasks that has no linked members should be visible    
        if (taskList[i].memberId == -1) {

            let el = document.createElement("option");
            el.textContent = taskList[i].name;
            el.value = taskList[i].id;
            tasksDropdown.appendChild(el);
        }
    }
}

function clearTasksDropdown() {
    let el = document.getElementById("tasks-dropdown");
    let i, L = el.options.length - 1;;
    for (i = L; i >= 0; i--) {
        el.remove(i);
    }
}