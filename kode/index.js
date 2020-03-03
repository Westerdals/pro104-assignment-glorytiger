// Finds the element "<div id='output-div'></div>" in the document
// (because of "id=output-div")
const outputDiv = document.getElementById("output-div");

function createNewTask(event) {
    //event.preventDefault();
    
    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='task-name']").value;
    
    // Object construction shorthand - this is the same as writing
    //const product = {
    //    name: name,
    //    price: price, ...
    //};
    // Which again could be written as:
    //const product = {};
    //product.name = name;
    // product.price = price;
    // etc.
    const task = {name};
    
    // Get the STRING item with the key "productList" from localStorage and parse (interpret) it into an object array
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    // Add the new product to the productList
    taskList.push(task);
    // "stringify" the productList back into a String and write it back to LocalStorage
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
}

function createNewMember(event) {
    //event.preventDefault();
    
    // Find an element with attribute "name" as "name". In this case <input name="name" placeholder="Product ..."
    // and retrives the .value - what the user wrote in the <input>
    const name = document.querySelector("[name='member-name']").value;
    
    // Object construction shorthand - this is the same as writing
    //const product = {
    //    name: name,
    //    price: price, ...
    //};
    // Which again could be written as:
    //const product = {};
    //product.name = name;
    // product.price = price;
    // etc.
    const member = {name};
    
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
    
    outputDiv.innerHTML = "";
    for (const task of taskList) {
        // Creates a new "<div></div>" - this is currently not anywhere in the document
        const taskEl = document.createElement("div");

        // "Destructoring" - this is the same as writing
        //const name = task.name;
        // etc, for name
        const { name } = task;
        
        // Update the contents inside the <div></div>
        taskEl.innerHTML = `<h4>${name}</h4>`;
        
        // Adds the new <div> to the "<div id='productList'></div>"
        outputDiv.appendChild(taskEl);
    }
}