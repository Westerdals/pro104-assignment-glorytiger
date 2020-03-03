// Finds the element "<div id='output-div'></div>" in the document
// (because of "id=output-div")
const outputDiv = document.getElementById("output-div");

function createNewTask(event) {
    //event.preventDefault();
    
    const id = 0;

    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='task-name']").value;

    const memberId = 0;
    
    // Object construction shorthand - this is the same as writing
    //const product = {
    //    id: id,
    //    name: name, ...
    //};
    // Which again could be written as:
    //const task = {};
    //task.id = id;
    //task.name = name;
    // etc.
    const task = {id, name, memberId};
    
    // Get the STRING item with the key "productList" from localStorage and parse (interpret) it into an object array
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    // Add the new product to the productList
    taskList.push(task);
    // "stringify" the productList back into a String and write it back to LocalStorage
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
}

function createNewMember(event) {
    //event.preventDefault();
    
    const id = 0;

    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='member-name']").value;
    
    // Object construction shorthand - this is the same as writing
    //const member = {
    //    id: id,
    //    name: name,
    //};
    // Which again could be written as:
    //const member = {};
    //member.id = id;
    //member.name = name;
    // etc.
    const member = {id, name};
    
    // Get the STRING item with the key "productList" from localStorage and parse (interpret) it into an object array
    const memberList = JSON.parse(window.localStorage.getItem("memberList")) || [];
    // Add the new product to the productList
    memberList.push(member);
    // "stringify" the productList back into a String and write it back to LocalStorage
    window.localStorage.setItem("memberList", JSON.stringify(memberList));
}

function renderTaskList() {
    // Returns the named entry in LocalStorage AS A STRING (text)
    const taskListInLocalStorage = window.localStorage.getItem("taskList");
    
    // Interprets ("parses") the string into OBJECTS
    let taskList = JSON.parse(taskListInLocalStorage);
    
    // If there was nothing in LocalStorage, we replace the productList with an empty list
    if (taskList == undefined) {
        taskList = [];
    }
    
    // Finds the element "<div id='outputDiv'></div>" in the document
    // (because of "id=taskList")
    const taskListEl = document.getElementById("outputDiv");
    taskListEl.innerHTML = "";

    for (const task of taskList) {
        // Creates a new "<div></div>" - this is currently not anywhere in the document
        const taskEl = document.createElement("div");

        // "Destructoring" - this is the same as writing
        //const id = task.id;
        //const name = task.name;
        //const memberId = task.memberId;
        // etc, for name
        const { id, name, memberId } = task;
        
        // Update the contents inside the <div></div>
        taskEl.innerHTML = `id: ${id}
            name: ${name}
            memberId: ${memberId}<br>`;
        
        // Adds the new <div> to the "<div id='productList'></div>"
        outputDiv.appendChild(taskEl);
    }
}

function renderMemberList() {
    // Returns the named entry in LocalStorage AS A STRING (text)
    const memberListInLocalStorage = window.localStorage.getItem("memberList");
    
    // Interprets ("parses") the string into OBJECTS
    let memberList = JSON.parse(memberListInLocalStorage);
    
    // If there was nothing in LocalStorage, we replace the memberList with an empty list
    if (memberList == undefined) {
        memberList = [];
    }
    
    // Finds the element "<div id='outputDiv'></div>" in the document
    // (because of "id=memberList")
    const memberListEl = document.getElementById("outputDiv");
    memberListEl.innerHTML = "";
    for (const member of memberList) {
        // Creates a new "<div></div>" - this is currently not anywhere in the document
        const memberEl = document.createElement("div");

        // "Destructoring" - this is the same as writing
        //const id = member.id;
        //const name = member.name;
        // etc, for id, name
        const { id, name } = member;
        
        // Update the contents inside the <div></div>
        memberEl.innerHTML = `id: ${id}
            name: ${name}<br>`;
        
        // Adds the new <div> to the "<div id='memberList'></div>"
        memberListEl.appendChild(memberEl);
    }
}