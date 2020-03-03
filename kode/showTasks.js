function showTasks() {
    // Returns the named entry in LocalStorage AS A STRING (text)
    const taskListInLocalStorage = window.localStorage.getItem("taskList");
    
    // Interprets ("parses") the string into OBJECTS
    let taskList = JSON.parse(taskListInLocalStorage);
    
    // If there was nothing in LocalStorage, we replace the productList with an empty list
    if (taskList == undefined) {
        taskList = [];
    }

    // Finds the element "<div id='output-div'></div>" in the document
    // (because of "id=output-div")
    let outputDiv = document.getElementById("output-div");
    outputDiv.innerHTML = "Name: Assigned member:";
    
    for (const task of taskList) {
        // Creates a new "<div></div>" - this is currently not anywhere in the document
        const taskEl = document.createElement("div");

        // "Destructoring" - this is the same as writing
        //const id = task.id;
        //const name = task.name;
        //const memberId = task.memberId;
        // etc, for name
        const {id, name, memberId} = task;

        const memberListInLocalStorage = window.localStorage.getItem("memberList");
        let memberList = JSON.parse(memberListInLocalStorage);
        if (memberList == undefined) {
            memberList = [];
        }
        
        // Convert memberId from task to memberName from memberList
        let memberName = '';
        for (const member of memberList) {
            if (member.id = id) {
                //memberName = member.name;
            }
        }
        
        // Update the contents inside the <div></div>
        taskEl.innerHTML += `${name}
            ${memberName}<br>`;
        
        // Adds the new <div> to the "<div id='productList'></div>"
        outputDiv.appendChild(taskEl);
    }
}