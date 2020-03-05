function showTasks() {
    clearOutputs();

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
    let outputDiv1 = document.getElementById("output-div1");
    let outputDiv2 = document.getElementById("output-div2");
    outputDiv1.innerHTML = `<b>Arbeidsoppgave:</b>`;
    outputDiv2.innerHTML = `<b>Tildelt:</b>`;
    
    for (const task of taskList) {
        // Creates a new "<div></div>" - this is currently not anywhere in the document
        const taskEl1 = document.createElement("div");
        const taskEl2 = document.createElement("div");

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
            console.log(member.id+"vs"+id);
            if (member.id == memberId) {
                console.log("match: "+memberName);
                memberName = member.name;
                break;
            }
        }
        
        // Update the contents inside the <div></div>
        taskEl1.innerHTML = `${name}<br>`;
        taskEl2.innerHTML = `${memberName}<br>`;
        
        // Adds the new <div> to the "<div id='productList'></div>"
        outputDiv1.appendChild(taskEl1);
        outputDiv2.appendChild(taskEl2);
    }
}